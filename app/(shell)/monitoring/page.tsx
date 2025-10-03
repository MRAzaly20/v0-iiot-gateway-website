import { RealtimeLine } from "@/components/charts/realtime-line"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MonitoringPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Visualization & Monitoring</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RealtimeLine title="Protocol Traffic (OPC UA)" color="var(--chart-2)" />
        </div>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Health Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div>Connectivity: Good</div>
            <div>Latency: 23 ms</div>
            <div>Packet Loss: 0.02%</div>
            <div>Uptime: 99.99%</div>
          </CardContent>
        </Card>
      </div>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Alerting System</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Integrate Email, Telegram, Slack, Microsoft Teams.
        </CardContent>
      </Card>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Network Topology</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Interactive graph coming soon.
          <div className="mt-2 text-xs">Tip: Pinch-zoom on mobile, keyboard arrows to navigate nodes.</div>
        </CardContent>
      </Card>
    </div>
  )
}
