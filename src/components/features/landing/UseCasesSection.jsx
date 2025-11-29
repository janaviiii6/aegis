import { Badge } from "../../common/Badge"

const cases = [
    "Consumer Brands (FMCG)",
    "D2C Startups",
    "PR & Comms Teams",
    "Brand Reputation Agencies",
    "Food & Beverage",
    "Skincare & Beauty"
]

export function UseCasesSection() {
    return (
        <section id="use-cases" className="bg-muted/30 py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8">Who It's For</h2>
                <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                    {cases.map((item) => (
                        <Badge key={item} variant="secondary" className="text-lg py-2 px-4">
                            {item}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    )
}
