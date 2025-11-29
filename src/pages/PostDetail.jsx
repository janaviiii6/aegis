import { ArrowLeft } from "lucide-react"
import { Button } from "../components/common/Button"
import { Link } from "react-router-dom"
import { PostPreview } from "../components/features/response/PostPreview"
import { AIInsightsPanel } from "../components/features/response/AIInsightsPanel"
import { ResponseComposer } from "../components/features/response/ResponseComposer"

export function PostDetail() {
    return (
        <div className="h-full flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
                <Link to="/incidents/1">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                </Link>
                <h1 className="text-xl font-bold">Response Drafting</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 overflow-hidden">
                {/* Left Column: Post & Insights */}
                <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
                    <PostPreview />
                    <AIInsightsPanel />
                </div>

                {/* Right Column: Response Composer */}
                <div className="flex flex-col h-full">
                    <ResponseComposer />
                </div>
            </div>
        </div>
    )
}
