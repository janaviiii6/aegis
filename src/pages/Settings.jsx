import { Upload, Save } from "lucide-react"
import { Button } from "../components/common/Button"
import { Input } from "../components/common/Input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/common/Card"

export function Settings() {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your brand configuration and source of truth.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Brand Source of Truth</CardTitle>
                    <CardDescription>Upload documents (PDF, DOCX) that Aegis uses to fact-check claims.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center text-center hover:bg-muted/50 transition-colors cursor-pointer">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mb-4">
                            <Upload className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <h3 className="font-medium">Click to upload or drag and drop</h3>
                        <p className="text-sm text-muted-foreground mt-1">PDF, DOCX up to 10MB</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-3 border rounded-md">
                            <div className="flex items-center space-x-3">
                                <div className="h-8 w-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs font-bold">PDF</div>
                                <div>
                                    <p className="text-sm font-medium">CloudBrew_Ingredients_Safety_2024.pdf</p>
                                    <p className="text-xs text-muted-foreground">Uploaded 2 days ago</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-destructive">Remove</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Detection Thresholds</CardTitle>
                    <CardDescription>Configure sensitivity for the Pulse Engine.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label className="text-sm font-medium">Spike Sensitivity</label>
                            <span className="text-sm text-muted-foreground">High</span>
                        </div>
                        <input type="range" className="w-full" />
                        <p className="text-xs text-muted-foreground">Higher sensitivity will detect smaller anomalies but may increase false positives.</p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Keywords to Watch</label>
                        <Input defaultValue="poison, toxic, sick, boycott, lawsuit" />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-end">
                <Button>
                    <Save className="mr-2 h-4 w-4" /> Save Changes
                </Button>
            </div>
        </div>
    )
}
