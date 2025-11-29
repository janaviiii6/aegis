import { MessageCircle, Heart, Share, AlertOctagon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "../../common/Card"
import { Badge } from "../../common/Badge"
import { Button } from "../../common/Button"

export function PostCard({ post }) {
    return (
        <Card className="mb-4">
            <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
                <div className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                        <p className="text-sm font-medium">{post.username}</p>
                        <p className="text-xs text-muted-foreground">{post.time}</p>
                    </div>
                </div>
                <Badge variant="outline" className="text-xs">{post.platform}</Badge>
            </CardHeader>
            <CardContent className="p-4 py-2">
                <p className="text-sm">{post.content}</p>
                {post.tags && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-[10px] h-5">{tag}</Badge>
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-4 pt-2 flex items-center justify-between">
                <div className="flex space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span className="text-xs">{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <MessageCircle className="h-3 w-3" />
                        <span className="text-xs">{post.comments}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Share className="h-3 w-3" />
                        <span className="text-xs">{post.shares}</span>
                    </div>
                </div>
                <Button size="sm" variant="ghost" className="h-7 text-xs">
                    Respond
                </Button>
            </CardFooter>
        </Card>
    )
}
