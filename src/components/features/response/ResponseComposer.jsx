import { Button } from "../../common/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../common/Card"
import { RefreshCw, Send, ThumbsDown, ThumbsUp } from "lucide-react"

export function ResponseComposer() {
    return (
        <Card className="flex-1 flex flex-col">
            <CardHeader className="pb-3">
                <CardTitle className="text-base">Draft Response</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <textarea
                    className="w-full h-full min-h-[150px] resize-none rounded-md border bg-transparent p-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    defaultValue="Hi there! We want to clarify that Dihydrogen Monoxide is simply the scientific name for water (H2O). It is completely safe and essential for hydration. CloudBrew uses triple-filtered water in all our drinks. 💧 #CloudBrew #Facts"
                />
                <div className="flex items-center space-x-2 mt-4">
                    <span className="text-xs font-medium text-muted-foreground">Tone:</span>
                    <Button variant="outline" size="sm" className="h-7 text-xs bg-accent text-accent-foreground">Friendly</Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">Formal</Button>
                    <Button variant="ghost" size="sm" className="h-7 text-xs">Assertive</Button>
                </div>
            </CardContent>
            <CardFooter className="border-t p-4 flex justify-between">
                <Button variant="ghost" size="sm">
                    <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                </Button>
                <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit Manually</Button>
                    <Button size="sm">
                        <Send className="mr-2 h-4 w-4" /> Approve & Post
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
