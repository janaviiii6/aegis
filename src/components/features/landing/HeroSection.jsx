import { Button } from "../../common/Button"
import { ArrowRight, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-background pt-24 pb-32 md:pt-32 md:pb-48">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground mb-8 bg-background/50 backdrop-blur-sm"
                >
                    <Shield className="mr-2 h-3.5 w-3.5 text-primary" />
                    <span>The Proactive Defense Layer for Modern Brands</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mx-auto max-w-4xl text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Control the Narrative. <br className="hidden md:block" />
                    <span className="text-primary">Defend the Truth.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl leading-relaxed"
                >
                    Aegis isn't just a monitoring tool. It's an AI-powered immunity system that detects misinformation before it spreads, inoculating your brand against reputational damage.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                    <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                        Request Access <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-primary/20 hover:bg-primary/5">
                        See the Science
                    </Button>
                </motion.div>

                {/* Abstract UI Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative mx-auto mt-24 max-w-5xl"
                >
                    <div className="aspect-[16/9] overflow-hidden rounded-2xl border bg-background/50 shadow-2xl backdrop-blur-sm ring-1 ring-white/10">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-blue-500/5" />
                        <div className="flex h-full items-center justify-center">
                            <div className="text-center space-y-4">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary animate-pulse">
                                    <Shield className="w-8 h-8" />
                                </div>
                                <p className="text-sm font-medium text-muted-foreground">Aegis Pulse Engine Active</p>
                                <div className="flex items-center justify-center gap-8 text-xs text-muted-foreground/50">
                                    <span>Scanning X...</span>
                                    <span>Scanning Reddit...</span>
                                    <span>Analyzing Sentiment...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
