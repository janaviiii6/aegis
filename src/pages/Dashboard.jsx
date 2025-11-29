import { Activity, AlertTriangle, MessageSquare, ShieldAlert } from "lucide-react"
import { StatusCard } from "../components/features/dashboard/StatusCard"
import { VelocityGraph } from "../components/features/dashboard/VelocityGraph"
import { IncidentList } from "../components/features/dashboard/IncidentList"

export function Dashboard() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatusCard title="Active Crises" value="3" icon={ShieldAlert} trend="+1" trendLabel="since yesterday" variant="destructive" />
                <StatusCard title="Misinfo Incidents" value="12" icon={AlertTriangle} trend="+4" trendLabel="today" variant="warning" />
                <StatusCard title="Posts in Review" value="45" icon={MessageSquare} trend="-12" trendLabel="since last hour" />
                <StatusCard title="Velocity Spike" value="High" icon={Activity} trend="Critical" trendLabel="current status" variant="destructive" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <VelocityGraph />
                </div>
                <div className="col-span-3">
                    <IncidentList />
                </div>
            </div>
        </div>
    )
}
