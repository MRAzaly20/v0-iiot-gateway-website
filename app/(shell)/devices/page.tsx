import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DevicesPage() {
  const discovered = [
    { name: "S7-1200", ip: "192.168.1.20", protocol: "Modbus", vendor: "Siemens" },
    { name: "M580", ip: "192.168.1.32", protocol: "OPC UA", vendor: "Schneider" },
    { name: "1756-L83E", ip: "192.168.1.44", protocol: "OPC UA", vendor: "Allen-Bradley" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Device & Protocol Management</h1>

      <Card className="glass">
        <CardHeader>
          <CardTitle>Auto Device Discovery</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Scan Network</Button>
            <Button variant="outline" className="border-white/20 bg-transparent">
              Advanced Options
            </Button>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Protocol</TableHead>
                  <TableHead>IP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {discovered.map((d) => (
                  <TableRow key={d.ip}>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell>{d.vendor}</TableCell>
                    <TableCell>{d.protocol}</TableCell>
                    <TableCell>{d.ip}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Driver Library</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Vendors supported: Siemens, Schneider, ABB, Rockwell, Mitsubishi, Omron.
            <div className="mt-3 flex gap-2">
              <Button size="sm">Browse Drivers</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                Install Selected
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Connection Tester</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-muted-foreground">Test protocol/device connectivity before deployment.</div>
            <div className="flex flex-wrap gap-2">
              <Button size="sm">Test Modbus</Button>
              <Button size="sm">Test BACnet</Button>
              <Button size="sm">Test OPC UA</Button>
              <Button size="sm">Test MQTT</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Tag Browser & Mapping</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Browse tags from PLCs/IEDs, map to gateway model, add units and scaling.
            <div className="mt-3 flex gap-2">
              <Button size="sm">Browse Tags</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                Map Selected
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardHeader>
            <CardTitle>Protocol Converter</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Map between protocols. Example: Modbus → MQTT → OPC UA.
            <div className="mt-3 flex gap-2">
              <Button size="sm">Create Mapping</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                View Pipelines
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
