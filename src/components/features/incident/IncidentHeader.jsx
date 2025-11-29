import { ArrowLeft, Clock, Share2 } from "lucide-react"
import { Button } from "../../common/Button"
import { Badge } from "../../common/Badge"
import { Card, CardContent } from "../../common/Card"
import { Link } from "react-router-dom"

export function IncidentHeader() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Link to="/dashboard">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">CloudBrew Energy Drink Health Scare</h1>
                        <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="destructive">High Severity</Badge>
                            <span className="text-sm text-muted-foreground flex items-center">
                                <Clock className="mr-1 h-3 w-3" /> Started 2h ago
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline">
                        <Share2 className="mr-2 h-4 w-4" /> Share Report
                    </Button>
                    <Button variant="destructive">Close Incident</Button>
                </div>
            </div>

            {/* Mini Timeline / Stats */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Total Posts</div>
                        <div className="text-2xl font-bold">1,240</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Potential Reach</div>
                        <div className="text-2xl font-bold">2.5M</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Sentiment</div>
                        <div className="text-2xl font-bold text-destructive">-85%</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-4">
                        <div className="text-sm font-medium text-muted-foreground">Platform</div>
                        <div className="text-2xl font-bold">Twitter/X</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
