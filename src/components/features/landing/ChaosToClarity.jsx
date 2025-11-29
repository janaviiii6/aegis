import { motion } from "framer-motion"
import { Activity, CheckCircle2, XCircle } from "lucide-react"

export function ChaosToClarity() {
    return (
        <section className="py-24 bg-muted/30 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    >
                        From Chaos to Clarity
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto"
                    >
                        When misinformation strikes, speed is your only defense. Aegis transforms overwhelming noise into actionable intelligence instantly.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    {/* Chaos Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 rounded-2xl bg-background border border-border/50 shadow-sm opacity-70 scale-95"
                    >
                        <div className="absolute inset-0 bg-destructive/5 rounded-2xl" />
                        <div className="relative space-y-4">
                            <div className="flex items-center gap-2 text-destructive font-semibold mb-4">
                                <XCircle className="w-5 h-5" />
                                <span>Without Aegis</span>
                            </div>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-background/50">
                                    <div className="w-8 h-8 rounded-full bg-muted flex-shrink-0" />
                                    <div className="space-y-2 flex-1">
                                        <div className="h-2 w-24 bg-muted rounded" />
                                        <div className="h-2 w-full bg-muted rounded" />
                                        <div className="h-2 w-2/3 bg-muted rounded" />
                                    </div>
                                </div>
                            ))}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border shadow-lg text-sm font-medium text-muted-foreground">
                                    Overwhelming Noise
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Clarity Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 rounded-2xl bg-background border border-primary/20 shadow-2xl ring-1 ring-primary/10"
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl" />
                        <div className="relative space-y-6">
                            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>With Aegis</span>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-primary/10 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-5 h-5 text-destructive" />
                                        <span className="font-medium">Spike Detected</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">00:02s ago</span>
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-lg bg-background border border-primary/10 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full border-2 border-primary" />
                                        <span className="font-medium">Analysis Complete</span>
                                    </div>
                                    <span className="text-xs text-muted-foreground">98% Confidence</span>
                                </div>

                                <div className="p-4 rounded-lg bg-primary text-primary-foreground shadow-md">
                                    <p className="text-sm font-medium">Response Drafted & Ready</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
