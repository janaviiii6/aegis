import { Filter, Search } from "lucide-react"
import { Button } from "../components/common/Button"
import { Input } from "../components/common/Input"
import { Card, CardContent } from "../components/common/Card"
import { Badge } from "../components/common/Badge"

const mockFeed = [
    { id: 1, platform: "Twitter", user: "@user123", content: "Is CloudBrew safe? I heard rumors...", severity: "Medium", type: "Inquiry" },
    { id: 2, platform: "Reddit", user: "u/concerned_mom", content: "My kids love this drink but I'm worried about the caffeine.", severity: "Low", type: "Complaint" },
    { id: 3, platform: "Twitter", user: "@troll_bot", content: "CloudBrew is literally poison. #boycott", severity: "High", type: "Misinformation" },
    { id: 4, platform: "Instagram", user: "@influencer_x", content: "Love the new flavor! 💖", severity: "Low", type: "Opinion" },
]

export function Monitoring() {
    return (
        <div className="flex h-full space-x-6">
            {/* Filters Sidebar */}
            <div className="w-64 space-y-6">
                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Search</h3>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-9" placeholder="Keywords..." />
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Platform</h3>
                    <div className="space-y-1">
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                            <span>Twitter / X</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                            <span>Reddit</span>
                        </label>
                        <label className="flex items-center space-x-2 text-sm">
                            <input type="checkbox" className="rounded border-gray-300" defaultChecked />
                            <span>Instagram</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Severity</h3>
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="destructive" className="cursor-pointer">High</Badge>
                        <Badge variant="warning" className="cursor-pointer">Medium</Badge>
                        <Badge variant="secondary" className="cursor-pointer">Low</Badge>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Live Feed</h2>
                    <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" /> Sort by Date
                    </Button>
                </div>

                {mockFeed.map(post => (
                    <Card key={post.id}>
                        <CardContent className="p-4 flex items-start justify-between">
                            <div className="space-y-1">
                                <div className="flex items-center space-x-2">
                                    <span className="font-semibold text-sm">{post.user}</span>
                                    <span className="text-xs text-muted-foreground">• {post.platform}</span>
                                    <Badge variant={post.severity === "High" ? "destructive" : post.severity === "Medium" ? "warning" : "secondary"} className="text-[10px] h-5">
                                        {post.type}
                                    </Badge>
                                </div>
                                <p className="text-sm">{post.content}</p>
                            </div>
                            <Button size="sm" variant="ghost">View</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
