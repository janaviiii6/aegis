import { Button } from "../../common/Button"

export function CTASection() {
    return (
        <section className="py-24 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                    Ready to defend your brand?
                </h2>
                <p className="mx-auto max-w-[600px] text-lg mb-8 opacity-90">
                    Don't let misinformation define your narrative. Take control with Aegis.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row justify-center">
                    <Button size="lg" variant="secondary" className="font-semibold">
                        Request Demo
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    )
}
