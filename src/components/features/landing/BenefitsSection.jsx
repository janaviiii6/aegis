import { ShieldCheck, Zap, DollarSign, FileText } from "lucide-react"

const benefits = [
    {
        title: "Protect Brand Reputation",
        description: "Stop false narratives from becoming established facts.",
        icon: ShieldCheck,
    },
    {
        title: "Respond Faster",
        description: "Cut response time from hours to minutes with AI assistance.",
        icon: Zap,
    },
    {
        title: "Reduce Revenue Loss",
        description: "Minimize the financial impact of boycotts and panic.",
        icon: DollarSign,
    },
    {
        title: "Central Source of Truth",
        description: "Keep your PR and Comms teams aligned with a single dashboard.",
        icon: FileText,
    },
]

export function BenefitsSection() {
    return (
        <section className="bg-primary/5 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">Why Brands Choose Aegis</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="flex items-start space-x-4">
                            <div className="mt-1 bg-background p-2 rounded-lg shadow-sm">
                                <benefit.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xl">{benefit.title}</h3>
                                <p className="text-muted-foreground mt-2">{benefit.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
