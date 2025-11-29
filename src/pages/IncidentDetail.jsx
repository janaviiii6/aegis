import { Button } from "../components/common/Button"
import { IncidentHeader } from "../components/features/incident/IncidentHeader"
import { TriageBoard } from "../components/features/incident/TriageBoard"

export function IncidentDetail() {
    return (
        <div className="flex flex-col space-y-6 h-full">
            <IncidentHeader />
            <TriageBoard />
        </div>
    )
}
