import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"
import { cn } from "../../../lib/utils"

export function StatusCard({ title, value, icon: Icon, trend, trendLabel, variant = "default" }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                <Icon className={cn("h-4 w-4 text-muted-foreground", variant === "destructive" && "text-destructive", variant === "warning" && "text-yellow-500")} />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">
                    <span className={cn("font-medium", trend.startsWith("+") ? "text-destructive" : "text-green-500")}>
                        {trend}
                    </span>{" "}
                    {trendLabel}
                </p>
            </CardContent>
        </Card>
    )
}
