import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-balance text-2xl font-semibold">Security & Compliance</h1>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Certificates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Manage X.509 certs for OPC UA, MQTT, HTTPS.
            <div>
              <Button size="sm">Manage Certificates</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Role-Based Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Control protocol permissions by role.
            <div>
              <Button size="sm">Configure Roles</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Audit Trail</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Log configuration changes and export for audits.
            <div>
              <Button size="sm">View Audit Log</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <Card className="glass">
          <CardHeader>
            <CardTitle>Protocol Security</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            DNP3 Secure Authentication, IEC 62351 for IEC61850/IEC104.
          </CardContent>
        </Card>
        <Card className="glass">
          <CardHeader>
            <CardTitle>Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            Perform firmware/software updates.
            <div>
              <Button size="sm">Check for Updates</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
