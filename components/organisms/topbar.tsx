"use client"

import { Button } from "@/components/ui/button"
import { StatusDot } from "@/components/atoms/status-dot"

export function Topbar({ onMenu }: { onMenu: () => void }) {
  return (
    <header
      role="banner"
      className="sticky top-0 z-30 border-b border-white/10 bg-[rgba(11,15,18,0.65)] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden" onClick={onMenu}>
            <span aria-hidden>☰</span>
          </Button>
          <span className="text-sm text-muted-foreground hidden md:inline">Gateway Status</span>
          <div className="flex items-center gap-3" aria-label="Realtime indicators">
            <StatusDot color="var(--chart-1)" label="Connected" />
            <StatusDot color="var(--chart-2)" label="Low Latency" />
            <StatusDot color="var(--chart-3)" label="No Alarms" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="sr-only">Current time</span>
          <span className="text-xs text-muted-foreground" aria-live="polite">
            {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </header>
  )
}
