import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductShowcase from "@/components/product-showcase"
import BenefitsSection from "@/components/benefits-section"
import TestimonialSection from "@/components/testimonial-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <HeroSection />
      <ProductShowcase />
      <BenefitsSection />
      <TestimonialSection />
      <FooterSection />
    </main>
  )
}
