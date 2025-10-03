import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProductivityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">User Productivity</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Export / Import</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Backup and restore configurations in JSON/YAML.
            <div className="flex gap-2">
              <Button size="sm">Export</Button>
              <Button variant="outline" size="sm" className="border-white/20 bg-transparent">
                Import
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Templates & Profiles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Save reusable protocol configurations.
            <div>
              <Button size="sm">Manage Templates</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Scheduler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Schedule data transfers and batches.
            <div>
              <Button size="sm">Create Schedule</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Simulation Mode</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Virtual devices for testing (dummy Modbus/OPC UA).
            <div>
              <Button size="sm">Start Simulation</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Tag Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Add descriptions, categories, units, scaling per tag.
            <div>
              <Button size="sm">Open Editor</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
