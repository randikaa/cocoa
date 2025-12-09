"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sparkles, Check } from "lucide-react"

export function NewsletterBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <section className="py-20 sm:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Exclusive Benefits</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
          Join the Cocoa Crew
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Get 10% off your first order, early access to limited drops, and exclusive content delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <Check className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">You are in! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border h-12 text-base"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
            >
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">No spam, ever. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
