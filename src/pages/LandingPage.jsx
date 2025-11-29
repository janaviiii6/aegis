import { Navbar } from "../components/features/landing/Navbar"
import { HeroSection } from "../components/features/landing/HeroSection"
import { ChaosToClarity } from "../components/features/landing/ChaosToClarity"
import { DefenseGrid } from "../components/features/landing/DefenseGrid"
import { ResilienceMetrics } from "../components/features/landing/ResilienceMetrics"
import { UseCasesSection } from "../components/features/landing/UseCasesSection"
import { CTASection } from "../components/features/landing/CTASection"
import { Footer } from "../components/features/landing/Footer"

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navbar />
            <main>
                <HeroSection />
                <ChaosToClarity />
                <DefenseGrid />
                <ResilienceMetrics />
                <UseCasesSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    )
}
