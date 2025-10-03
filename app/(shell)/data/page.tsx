import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DataPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Data Management & Processing</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Data Transformation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Low-code normalization, scaling, unit conversion, filtering, aggregation.
            <div>
              <Button size="sm">Open Transformer</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Buffering & Store-and-Forward</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Configure local buffering and forwarding strategies for outages.
            <div>
              <Button size="sm">Configure Buffer</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Time-Series Databases</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Built-in InfluxDB / TimescaleDB, connect external PostgreSQL / MongoDB.
            <div className="flex gap-2">
              <Button size="sm">Add InfluxDB</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                Add Timescale
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Events & Alarms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Configure conditional triggers and notifications.
            <div className="flex gap-2">
              <Button size="sm">New Rule</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                Destinations
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Edge Analytics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Lightweight analytics: summaries, FFT, anomaly detection.
            <div>
              <Button size="sm">Open Analytics</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
