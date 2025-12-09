import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedProducts } from "@/components/featured-products"
import { SocialProof } from "@/components/social-proof"
import { NewsletterBanner } from "@/components/newsletter-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <SocialProof />
        <NewsletterBanner />
      </main>
      <Footer />
    </div>
  )
}
