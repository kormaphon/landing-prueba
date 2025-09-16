import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { QuoteSection } from "@/components/quote-section"
import { TrustSection } from "@/components/trust-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <QuoteSection />
      <TrustSection />
      <Footer />
    </main>
  )
}
