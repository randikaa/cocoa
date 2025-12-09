"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/currency"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute inset-0 bg-[url('https://s6.imgcdn.dev/YTtOwl.jpg')] opacity-5 bg-cover bg-center" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isLoaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">New Drop: AKIRA 2025</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              <span className="text-foreground">Wear Your</span>
              <br />
              <span className="text-shimmer">Fandom</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-md leading-relaxed">
              Premium streetwear inspired by anime, K-pop, and gaming culture. Express yourself, rep your obsessions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-medium group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/limited">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-card px-8 h-12 text-base font-medium bg-transparent"
                >
                  View Limited Drops
                </Button>
              </Link>
            </div>

            {/* Trust badges - Updated shipping threshold to LKR */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">50K+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">4.9</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">Free</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Shipping Rs.5000+</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isLoaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card">
              <img
                src="https://s6.imgcdn.dev/YTtOwl.jpg"
                alt="Model wearing cocoa streetwear"
                className="w-full h-full object-cover"
              />
              {/* Floating product card - Updated price to LKR */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-card overflow-hidden">
                    <img
                      src="/placeholder.svg?height=64&width=64"
                      alt="Featured product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Neon Dreams Oversized</p>
                    <p className="text-xs text-muted-foreground">Most Popular</p>
                  </div>
                  <p className="text-lg font-bold text-primary">{formatPrice(4500)}</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-accent/30 rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}
