import { env } from '../config/env.js';

export interface ClinicalSummary {
  symptoms: string;
  diagnosis: string;
  treatment: string;
  followUp: string;
  disclaimer: string;
  source: 'ai' | 'rule-based';
}

export interface ClinicalSummarizer {
  summarize(note: string): Promise<ClinicalSummary> | ClinicalSummary;
}

/**
 * Rule-based fallback summariser.
 *
 * Extracts structured sections from a free-form clinical note by matching
 * labelled keywords. It never invents medical facts: anything that cannot be
 * reliably attributed to a section is omitted rather than guessed.
 */
export class HeuristicSummarizer implements ClinicalSummarizer {
  private readonly dictionary: { regex: RegExp; key: keyof Omit<ClinicalSummary, 'source' | 'disclaimer'> }[] = [
    { regex: /(?:symptoms?|complaint|presenting complaints?)[: -]?\s*(.+?)(?=\n\n|Diagnosis:|Diagnosis\s|Treatment|Rx:|Plan:|Follow|$)/is, key: 'symptoms' },
    { regex: /(?:diagnosis|impression)[: -]?\s*(.+?)(?=\n\n|Treatment|Rx:|Plan:|Follow|Notes:|$)/is, key: 'diagnosis' },
    { regex: /(?:treatment|plan|management|advice)[: -]?\s*(.+?)(?=\n\n|Follow|Notes:|Prescription|Rx:|$)/is, key: 'treatment' },
    { regex: /(?:follow[- ]?up|review)[: -]?\s*(.+?)(?=\n\n|Notes:|Prescription|Rx:|$)/is, key: 'followUp' },
  ];

  summarize(note: string): ClinicalSummary {
    const clean = note.replace(/\r/g, '').trim();
    const result: Omit<ClinicalSummary, 'source' | 'disclaimer'> = {
      symptoms: '',
      diagnosis: '',
      treatment: '',
      followUp: '',
    };

    for (const { regex, key } of this.dictionary) {
      const match = clean.match(regex);
      if (match?.[1]) {
        const value = match[1].replace(/^\s*[-•]\s*/, '').trim();
        if (value) result[key] = value;
      }
    }

    return {
      ...result,
      source: 'rule-based',
      disclaimer: 'This summary was generated automatically and requires clinician review.',
    };
  }
}

interface OpenAIMessage {
  role: 'system' | 'user';
  content: string;
}

/**
 * LLM-backed summariser used only when AI_API_KEY is configured.
 * Falls back to the heuristic summariser on any API failure so the feature
 * remains functional without external services.
 */
export class OpenAICompatibleSummarizer implements ClinicalSummarizer {
  private readonly fallback = new HeuristicSummarizer();

  private get baseUrl(): string {
    return env.aiApiBaseUrl || 'https://api.openai.com/v1';
  }

  async summarize(note: string): Promise<ClinicalSummary> {
    try {
      const messages: OpenAIMessage[] = [
        {
          role: 'system',
          content:
            'You are a medical scribe. Summarise the given clinical note into exactly four short sections: ' +
            '"symptoms", "diagnosis", "treatment", "followUp". Only include facts present in the note. ' +
            'If a section has no supporting information, respond with an empty string for it. ' +
            'Return a single JSON object with exactly these four keys. Never add or infer new medical facts.',
        },
        { role: 'user', content: note },
      ];

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const res = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.aiApiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages,
          temperature: 0,
          max_tokens: 400,
          response_format: { type: 'json_object' },
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (!res.ok) {
        throw new Error(`AI API returned ${res.status}`);
      }

      const data = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('AI API returned empty content');

      const parsed = JSON.parse(content) as Partial<ClinicalSummary>;
      return {
        symptoms: String(parsed.symptoms ?? ''),
        diagnosis: String(parsed.diagnosis ?? ''),
        treatment: String(parsed.treatment ?? ''),
        followUp: String(parsed.followUp ?? ''),
        source: 'ai',
        disclaimer: 'AI-generated summary — requires clinician review before use.',
      };
    } catch {
      // Any failure (network, auth, malformed response, timeout) degrades
      // gracefully to the deterministic summariser.
      return this.fallback.summarize(note);
    }
  }
}

/** Factory that picks the best available summariser based on configuration. */
export function createClinicalSummarizer(): ClinicalSummarizer {
  return env.aiApiKey ? new OpenAICompatibleSummarizer() : new HeuristicSummarizer();
}