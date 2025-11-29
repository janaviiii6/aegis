import { Card, CardContent, CardHeader } from "../../common/Card"
import { Badge } from "../../common/Badge"
import { MessageCircle, Heart, Share, User } from "lucide-react"

export function PostPreview() {
    return (
        <Card className="h-full">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                    <div className="font-semibold">@conspiracy_king</div>
                    <div className="text-sm text-muted-foreground">Twitter • 10m ago</div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-lg">
                    WARNING: Just found out that CloudBrew Energy Drink contains <span className="font-bold text-destructive">Dihydrogen Monoxide</span>!
                    This is a chemical used in nuclear reactors! They are poisoning us! #boycott #cloudbrew #poison
                </p>
                <div className="rounded-md bg-muted aspect-video flex items-center justify-center text-muted-foreground">
                    [Image Attachment Placeholder]
                </div>
                <div className="flex items-center space-x-6 pt-4 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                        <Heart className="h-5 w-5" />
                        <span>1,240</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MessageCircle className="h-5 w-5" />
                        <span>450</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Share className="h-5 w-5" />
                        <span>890</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
