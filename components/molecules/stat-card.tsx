"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatCard({
  title,
  value,
  subtitle,
  accent = "var(--chart-3)",
}: {
  title: string
  value: string
  subtitle?: string
  accent?: string
}) {
  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold" style={{ color: accent }}>
          {value}
        </div>
        {subtitle ? <div className="text-xs mt-1 text-muted-foreground">{subtitle}</div> : null}
      </CardContent>
    </Card>
  )
}
