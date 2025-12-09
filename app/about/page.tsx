import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Heart, Sparkles, Users, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Born from the Culture, <br />
              <span className="text-shimmer">Made for the Culture</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              cocoa is more than a brand. We are a community of fans, gamers, and dreamers who wear our passions on our
              sleeves—literally.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 sm:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    It started in 2023 with a simple frustration: why is it so hard to find quality streetwear that
                    represents our fandoms without looking cringe?
                  </p>
                  <p>
                    We grew up watching anime after school, staying up late for K-pop comebacks, and spending weekends
                    grinding games with friends. These weren&apos;t just hobbies—they shaped who we are.
                  </p>
                  <p>
                    cocoa was born from that passion. Every design is created by fans, for fans. We do not just slap
                    logos on shirts—we craft pieces that capture the essence of what makes these cultures special.
                  </p>
                  <p>
                    No bootlegs. No cringe. Just authentic, premium streetwear that lets you rep your obsessions with
                    style.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-background">
                  <img
                    src="/placeholder.svg?height=600&width=600"
                    alt="cocoa team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 sm:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-16">What We Stand For</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Authenticity</h3>
                <p className="text-sm text-muted-foreground">
                  Every design comes from genuine love for the culture. No cash grabs, just passion.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Premium materials and printing. Our gear is made to last through countless wears.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  We are building more than a brand—we are building a home for fans worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  Fresh designs, limited drops, and collabs that push creative boundaries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join the Crew</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to wear your passion? Explore our collections and find your next favorite piece.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
