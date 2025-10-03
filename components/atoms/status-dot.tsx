"use client"

export function StatusDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5" role="status" aria-label={label}>
      <span
        aria-hidden
        className="inline-block size-2.5 rounded-full ring-2 ring-black/30"
        style={{ backgroundColor: color }}
      />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
