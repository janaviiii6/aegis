import { Activity, Brain, MessageSquare, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"

const features = [
    {
        title: "Spike Detection",
        description: "Finds sudden surges in harmful conversations before they go viral.",
        icon: Activity,
    },
    {
        title: "Smart Classification",
        description: "Separates legitimate complaints from coordinated misinformation attacks.",
        icon: Brain,
    },
    {
        title: "Crisis Response Assistant",
        description: "Drafts fact-based, tone-appropriate replies using your brand's data.",
        icon: MessageSquare,
    },
    {
        title: "Impact Analysis",
        description: "Estimates financial and reputational risk in real-time.",
        icon: TrendingUp,
    },
]

export function FeaturesSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Capabilities</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Everything you need to defend your brand.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <Card key={feature.title} className="border-none shadow-md bg-muted/20">
                            <CardHeader>
                                <feature.icon className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
