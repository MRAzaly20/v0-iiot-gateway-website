import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Integration & Scalability</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Northbound</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            AWS IoT, Azure IoT Hub, Google IoT Core; PI, Ignition, Kepware, Canary.
            <div>
              <Button size="sm">Add Connection</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Southbound</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Vendor drivers: Siemens S7, Schneider M580, Allen-Bradley, Mitsubishi, Omron.
            <div>
              <Button size="sm">Manage Drivers</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Edge & APIs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Container apps (Docker/K3s); expose REST/gRPC APIs; multi-gateway.
            <div className="flex gap-2">
              <Button size="sm">Deploy App</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                API Docs
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
