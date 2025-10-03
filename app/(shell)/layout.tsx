"use client"

import type React from "react"

import { useState } from "react"
import { Sidebar } from "@/components/organisms/sidebar"
import { Topbar } from "@/components/organisms/topbar"
import { cn } from "@/lib/utils"

export default function ShellLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="min-h-dvh flex">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <div className={cn("flex-1 flex flex-col min-w-0")}>
        <Topbar onMenu={() => setOpen((v) => !v)} />
        <main id="main" role="main" className="flex-1 p-4 md:p-6">
          <div className="mx-auto w-full max-w-[1400px]">{children}</div>
        </main>
      </div>
    </div>
  )
}
