# Mini EHR — Electronic Health Record demo

A production-style, full-stack EHR web application built as an interview take-home assignment.
It covers the end-to-end clinical workflow: **patient registration → appointments → medical
visits → diagnoses → prescriptions → dashboard analytics**, with role-based access control and
an optional AI-powered clinical note summariser.

- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS 4, React Router 7, TanStack Query, React Hook Form + Zod
- **Backend**: Express, TypeScript (ESM), Prisma ORM, PostgreSQL
- **Auth**: JWT (rolling, 8h expiry in demo) · **RBAC**: Administrator / Doctor / Receptionist

---

## Features

| Area | Details |
| --- | --- |
| Authentication | Login page with demo account quick-fill; JWT stored in `localStorage`; route guards |
| Role-based access | Backend `requireRole` middleware + UI guards (e.g. Receptionists cannot record visits) |
| Patients | Register / edit / delete (admin), search (name, ID, phone), gender filter, pagination, auto `EHR-0000XX` ID, last-visit indicator |
| Patient profile | Tabbed view: Overview, Medical history, Visits, Prescriptions, Appointments |
| Visit / consultation | Vital signs (BP, HR, temp, weight), symptoms, diagnosis, treatment plan, doctor notes |
| Prescriptions | One-to-many medicines with dosage, frequency, duration, instructions (linked to a visit) |
| Appointments | Book, reschedule, complete, cancel, delete (admin); date/status/doctor filters; duplicate-slot conflict detection (409) |
| Dashboard | Stat cards (patients, today/upcoming appointments, visits, doctors) + recent activity |
| Medical records | Searchable, filterable record of every visit across all patients; in-place editing by doctors/admins |
| Settings | Admin-only user management (create users, assign roles, delete) |
| AI summariser | `POST /api/ai/summarize-note` — free-text clinical note → structured symptoms/diagnosis/treatment/follow-up. Uses an OpenAI-compatible API **if `AI_API_KEY` is set**, otherwise a local **heuristic rule-based extractor** always works offline. Output is explicitly labelled as requiring clinician review. |

## Demo credentials

| Role | Email | Password |
| --- | --- | --- |
| Administrator | `admin@ehr.local` | `Admin@123` |
| Doctor | `doctor@ehr.local` | `Doctor@123` |
| Doctor | `doctor2@ehr.local` | `Doctor@123` |
| Receptionist | `receptionist@ehr.local` | `Reception@123` |

The seed also creates **9 patients** (Aathithya R = `EHR-000001`), **5 medical visits, 5
prescriptions (11 line items), 6 appointments** with realistic sample data.

## Getting started

Prerequisites: **Node 20+**, **PostgreSQL 13+** running locally.

### 1. Install dependencies

```bash
npm install
```

### 2. Configure the database

Copy the example env file and edit if your Postgres credentials differ:

```bash
copy server\.env.example server\.env
```

Default: `DATABASE_URL=postgresql://postgres:postgres@localhost:5432/mini_ehr`, server on port
`5000`, client on port `5173`, API base `CLIENT_URL=http://localhost:5173`.

> Optional: set `AI_API_KEY` (and `AI_API_BASE_URL`) to switch the clinical-note summariser
> from local rules to an OpenAI-compatible model.

### 3. Create the schema and seed demo data

```bash
npm run setup        # db push + seed (idempotent; seed wipes tables safely)
```

### 4. Run

```bash
npm run dev          # starts API (5000) + Vite dev server (5173) concurrently
```

Open **http://localhost:5173** and sign in with any demo account.

## Scripts (root)

| Script | Description |
| --- | --- |
| `npm run dev` | Run API + client in watch mode |
| `npm run build` | Production build for server (tsc) and client (tsc + vite) |
| `npm run lint` | ESLint for both workspaces |
| `npm run typecheck` | `tsc` for both workspaces |
| `npm run db:push` | Apply Prisma schema to the database |
| `npm run db:seed` | Wipe + reseed demo data |
| `npm run setup` | `db:push` + `db:seed` |

## Project structure

```
.
├── client/                     # React + Vite + Tailwind
│   └── src/
│       ├── components/         # ui primitives, layout, routing guards, forms
│       ├── forms/schemas.ts    # Zod schemas (shared per feature)
│       ├── hooks/              # useAuth (context), useDebounce
│       ├── lib/                # http client, auth storage, queryClient, utils
│       ├── pages/              # Login, Dashboard, Patients, PatientDetail,
│       │                       #   Appointments, MedicalRecords, Settings
│       ├── services/           # typed API services per domain
│       └── types/              # shared domain types + label maps
└── server/                     # Express + Prisma
    ├── prisma/
    │   ├── schema.prisma       # data model (User, Patient, MedicalVisit,
    │   │                       #   Prescription(+Item), Appointment)
    │   └── seed.ts             # demo users/data
    └── src/
        ├── config/             # env parsing
        ├── controllers/        # auth, patient, visit, prescription,
        │                       #   appointment, dashboard, user, ai
        ├── middleware/         # auth + role guard, zod validation, errors
        ├── services/           # patient-id generator, clinical summariser
        ├── validators/         # zod request schemas
        └── routes/             # REST routers mounted under /api
```

## Data model

- **User** — `ADMIN` / `DOCTOR` / `RECEPTIONIST`, bcrypt password hash
- **Patient** — demographics, blood group, allergies, conditions, emergency contact, auto `patientId` (`EHR-0000XX`)
- **MedicalVisit** — vitals, complaint, symptoms, diagnosis, treatment plan, notes
- **Prescription / PrescriptionItem** — link to visit, 1–n medicines
- **Appointment** — patient × doctor, date/time slot, type, status (`SCHEDULED → CONFIRMED → COMPLETED / CANCELLED`)

## API overview

All endpoints return `{ success, data }` (or `{ success, message, errors }` on failure) and
require a `Authorization: Bearer <token>` header.

| Method & path | Allowed roles | Purpose |
| --- | --- | --- |
| `POST /api/auth/login` | public | exchange credentials for JWT |
| `GET /api/auth/me` | authenticated | current user |
| `GET /api/dashboard/stats` | authenticated | aggregate counts + recent activity |
| `GET/POST /api/patients` | all auth (POST: staff) | list/search, register |
| `GET/PUT/DELETE /api/patients/:id` | staff (DELETE: admin) | view/update/remove |
| `GET /api/patients/doctors` | authenticated | doctor pick-list |
| `GET/POST /api/patients/:id/visits` | doctor/admin (GET also admins) | visit history, record a visit |
| `GET/POST /api/patients/:id/prescriptions` | doctor/admin | prescriptions for a patient |
| `GET/PUT /api/visits/:id` | doctor/admin | full-record read / update |
| `DELETE /api/prescriptions/:id` | doctor/admin | remove a prescription |
| `GET/POST /api/appointments` | GET: auth; POST: staff | list (filters), book |
| `PUT/DELETE /api/appointments/:id` | PUT: staff; DELETE: admin | reschedule/complete/cancel/delete |
| `GET /api/users`, `POST /api/users`, `DELETE /api/users/:id` | admin | user management |
| `POST /api/ai/summarize-note` | doctor/admin | AI / rule-based note summarisation |

## Security & production notes

- Passwords are bcrypt-hashed; JWT secret lives in `.env` — **change it from the default** in any non-demo deployment.
- Zod validation on every request body; centralized error mapping for Prisma (duplicate/foreign-key/not-found).
- The AI summary is a **drafting aid only** and is never substituted for clinician judgment — the UI shows a visible disclaimer and lets the doctor review before saving.
- This is a demo: JWT expiry and login indirection are simplified; consider refresh tokens, HTTPS, CSRF handling, and rate limiting before production use.

## Stack version notes

- Prisma shows a deprecation notice about `package.json#prisma` config — cosmetic, safe to ignore.
- `npm audit` reports a few transitive vulnerabilities in tooling packages; none affect the demo runtime paths.