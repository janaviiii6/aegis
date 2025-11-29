import { motion } from "framer-motion"

const metrics = [
    { value: "40%", label: "Faster Response Time", suffix: "avg" },
    { value: "$2.5M", label: "Revenue Protected", suffix: "/yr" },
    { value: "24/7", label: "Autonomous Monitoring", suffix: "" },
    { value: "0", label: "False Positives", suffix: "goal" },
]

export function ResilienceMetrics() {
    return (
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                        >
                            <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
                                {metric.value}
                            </div>
                            <div className="text-primary-foreground/80 font-medium text-sm md:text-base uppercase tracking-wide">
                                {metric.label} <span className="opacity-50 text-xs normal-case ml-1">{metric.suffix}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
