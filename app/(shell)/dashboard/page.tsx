import { StatCard } from "@/components/molecules/stat-card"
import { RealtimeLine } from "@/components/charts/realtime-line"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Real-Time Dashboard</h1>

      <section aria-labelledby="kpis" className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Devices Online" value="128" subtitle="Out of 134" accent="var(--chart-2)" />
        <StatCard title="Avg. Latency" value="23 ms" subtitle="Last 5 min" />
        <StatCard title="Packet Loss" value="0.02%" subtitle="Last 5 min" />
        <StatCard title="Active Alarms" value="0" subtitle="Current" accent="var(--chart-2)" />
      </section>

      <section aria-labelledby="traffic" className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RealtimeLine />
        </div>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
          </CardHeader>
          <CardContent className="max-h-[260px] overflow-auto">
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">No active alerts.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="devices">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Top Devices by Throughput</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[220px]">Device</TableHead>
                  <TableHead>Protocol</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Msgs/sec</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { d: "S7-1500 (Line A)", p: "S7/Modbus", s: "Online", r: 425 },
                  { d: "ABB ACS880", p: "Modbus", s: "Online", r: 318 },
                  { d: "Rockwell 1756-L83E", p: "OPC UA", s: "Online", r: 287 },
                ].map((row) => (
                  <TableRow key={row.d}>
                    <TableCell className="font-medium">{row.d}</TableCell>
                    <TableCell>{row.p}</TableCell>
                    <TableCell>{row.s}</TableCell>
                    <TableCell className="text-right">{row.r}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
