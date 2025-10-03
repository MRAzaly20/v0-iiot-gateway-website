"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Item = { href: string; label: string }

const groups: { heading: string; items: Item[] }[] = [
  {
    heading: "Overview",
    items: [{ href: "/dashboard", label: "Real-Time Dashboard" }],
  },
  {
    heading: "Devices & Protocols",
    items: [{ href: "/devices", label: "Device & Protocol Mgmt" }],
  },
  {
    heading: "Data",
    items: [{ href: "/data", label: "Data Management" }],
  },
  {
    heading: "Monitoring",
    items: [{ href: "/monitoring", label: "Visualization & Monitoring" }],
  },
  {
    heading: "Security",
    items: [{ href: "/security", label: "Security & Compliance" }],
  },
  {
    heading: "Integrations",
    items: [{ href: "/integrations", label: "Integration & Scalability" }],
  },
  {
    heading: "Productivity",
    items: [{ href: "/productivity", label: "User Productivity" }],
  },
  {
    heading: "Enterprise",
    items: [{ href: "/enterprise", label: "Advanced Enterprise" }],
  },
]

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = usePathname()

  return (
    <>
      {/* mobile overlay */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />
      <aside
        id="sidebar"
        aria-label="Primary"
        className={cn(
          "fixed z-50 inset-y-0 left-0 w-72 p-4 md:static md:translate-x-0 md:block",
          "bg-[rgba(13,19,24,0.7)] border-r border-white/10 backdrop-blur-xl",
          "transition-transform",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="font-semibold tracking-wide text-lg text-foreground">
            IIoT Gateway
          </Link>
          <Button variant="ghost" size="icon" aria-label="Close menu" className="md:hidden" onClick={onClose}>
            <span aria-hidden>×</span>
          </Button>
        </div>

        <nav role="navigation" aria-label="Main" className="mt-6 space-y-6">
          {groups.map((g) => (
            <div key={g.heading}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground/80 mb-2">{g.heading}</div>
              <ul className="space-y-1">
                {g.items.map((item) => {
                  const active = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm outline-none",
                          "transition-colors",
                          active
                            ? "bg-primary/20 text-primary"
                            : "text-foreground/80 hover:text-foreground hover:bg-white/5",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-8 text-xs text-muted-foreground">
          <span className="sr-only">Version</span>v0.1.0
        </div>
      </aside>
    </>
  )
}
