export function LoadingState({ rows = 4, message = 'Loading…' }: { rows?: number; message?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6" role="status">
      <p className="sr-only">{message}</p>
      <div className="animate-pulse space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="h-4 w-4 rounded-full bg-slate-200" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-2/5 rounded bg-slate-200" />
              <div className="h-3 w-3/5 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}