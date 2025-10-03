"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type Point = { t: number; v: number }

export function RealtimeLine({
  title = "Gateway Throughput (msg/s)",
  color = "var(--chart-1)",
}: {
  title?: string
  color?: string
}) {
  const [data, setData] = useState<Point[]>([])
  const idRef = useRef<number | null>(null)

  const seed = useMemo(() => Date.now() % 1000, [])
  useEffect(() => {
    // simulate live updates
    const start = Date.now()
    idRef.current = window.setInterval(() => {
      const t = Math.round((Date.now() - start) / 1000)
      const noise = Math.sin((t + seed) / 5) * 5 + Math.random() * 3
      const v = Math.max(0, 120 + noise * 4)
      setData((prev) => [...prev.slice(-59), { t, v: Math.round(v) }])
    }, 1000)
    return () => {
      if (idRef.current) clearInterval(idRef.current)
    }
  }, [seed])

  return (
    <Card className="glass">
      <CardHeader>
        <CardTitle className="text-pretty">{title}</CardTitle>
      </CardHeader>
      <CardContent className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
            <XAxis dataKey="t" tick={{ fill: "rgba(230,240,255,0.7)", fontSize: 12 }} stroke="rgba(255,255,255,0.15)" />
            <YAxis tick={{ fill: "rgba(230,240,255,0.7)", fontSize: 12 }} stroke="rgba(255,255,255,0.15)" />
            <Tooltip
              contentStyle={{
                background: "rgba(13,19,24,0.9)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "var(--foreground)",
                borderRadius: 8,
              }}
              labelFormatter={(l) => `t=${l}s`}
            />
            <Line
              type="monotone"
              dataKey="v"
              stroke={color}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
              name="msgs/sec"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
