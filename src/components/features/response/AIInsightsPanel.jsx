import { AlertTriangle, CheckCircle, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"
import { Badge } from "../../common/Badge"

export function AIInsightsPanel() {
    return (
        <Card className="bg-muted/30">
            <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span>Aegis Analysis</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Classification</div>
                    <div className="flex items-center space-x-2">
                        <Badge variant="destructive" className="text-sm">Fearmongering</Badge>
                        <Badge variant="secondary" className="text-sm">Misinformation</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                        Confidence Score: <span className="font-bold text-foreground">98%</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground">Detected Technique</div>
                    <p className="text-sm">
                        Uses scientific-sounding terms ("Dihydrogen Monoxide") to create false alarm about safe ingredients (Water).
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="text-sm font-medium text-muted-foreground flex items-center">
                        <FileText className="mr-1 h-3 w-3" /> Source of Truth Match
                    </div>
                    <div className="rounded-md border bg-background p-3 text-sm">
                        <div className="font-semibold mb-1">Ingredient Safety Sheet: Water</div>
                        <p className="text-muted-foreground text-xs">
                            "Water is the primary ingredient in CloudBrew. It is filtered and purified..."
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
