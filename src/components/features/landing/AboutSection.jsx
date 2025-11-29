export function AboutSection() {
    return (
        <section id="product" className="bg-muted/50 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">What is Aegis?</h2>
                <p className="mx-auto max-w-[800px] text-lg text-muted-foreground mb-12">
                    Aegis is an AI-powered crisis management system designed to protect brands from the rapid spread of misinformation.
                    It acts as your 24/7 digital guardian, filtering out noise to focus on what truly threatens your reputation.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-2">AI Detection</h3>
                        <p className="text-muted-foreground">Instantly spots anomalies and misinformation patterns.</p>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-2">Crisis Triage</h3>
                        <p className="text-muted-foreground">Prioritizes threats so you know exactly what to address first.</p>
                    </div>
                    <div className="bg-background p-6 rounded-lg shadow-sm">
                        <h3 className="font-bold text-xl mb-2">Real-time Defense</h3>
                        <p className="text-muted-foreground">Drafts fact-based responses to neutralize false narratives.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
