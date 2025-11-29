import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"
import { Badge } from "../../common/Badge"
import { Button } from "../../common/Button"

const incidents = [
    { id: 1, title: "CloudBrew Health Scare", severity: "High", type: "Misinformation", time: "2h ago" },
    { id: 2, title: "Boycott Hashtag Spike", severity: "Medium", type: "Boycott", time: "4h ago" },
    { id: 3, title: "Customer Service Outage", severity: "Low", type: "Complaint", time: "6h ago" },
]

export function IncidentList() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Top Live Incidents</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {incidents.map((incident) => (
                        <div key={incident.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{incident.title}</p>
                                <div className="flex items-center gap-2">
                                    <Badge variant={incident.severity === "High" ? "destructive" : incident.severity === "Medium" ? "warning" : "secondary"}>
                                        {incident.severity}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground">{incident.type}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-xs text-muted-foreground">{incident.time}</span>
                                <Button size="sm" variant="outline">View</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
