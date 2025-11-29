export function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16">How It Works</h2>
                <div className="grid gap-8 md:grid-cols-3 text-center">
                    <div className="relative">
                        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">1</div>
                        <h3 className="text-xl font-bold mb-2">Monitor & Detect</h3>
                        <p className="text-muted-foreground">Aegis listens to brand mentions across platforms and spots abnormal velocity spikes.</p>
                    </div>
                    <div className="relative">
                        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">2</div>
                        <h3 className="text-xl font-bold mb-2">Analyze & Classify</h3>
                        <p className="text-muted-foreground">AI identifies complaints vs. misinformation and analyzes the narrative spread.</p>
                    </div>
                    <div className="relative">
                        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-6">3</div>
                        <h3 className="text-xl font-bold mb-2">Respond & Defend</h3>
                        <p className="text-muted-foreground">Review AI-drafted responses and deploy them to neutralize threats instantly.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
