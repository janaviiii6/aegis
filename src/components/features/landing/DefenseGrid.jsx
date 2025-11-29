import { motion } from "framer-motion"
import { Shield, Syringe, Zap, Lock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../common/Card"

const features = [
    {
        title: "Brand Inoculation",
        description: "Proactively identify weak points in your brand narrative and strengthen them before an attack happens.",
        icon: Syringe,
    },
    {
        title: "Real-Time Shielding",
        description: "Our Pulse Engine monitors 50+ platforms simultaneously, detecting anomalies in milliseconds.",
        icon: Shield,
    },
    {
        title: "Surgical Response",
        description: "AI-drafted responses that are fact-checked, tone-calibrated, and designed to neutralize, not amplify.",
        icon: Zap,
    },
    {
        title: "Data Sovereignty",
        description: "Your brand data is your own. Aegis operates with enterprise-grade security and privacy by design.",
        icon: Lock,
    },
]

export function DefenseGrid() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Aegis Defense Architecture</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Built for resilience in an unpredictable world.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none bg-muted/20 hover:bg-muted/40 transition-colors duration-300">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
