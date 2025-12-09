"use client"

import { reviews } from "@/lib/data"
import { Star, Quote } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-20 sm:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">What the Crew Says</h2>
          <p className="text-muted-foreground mt-2">Real reviews from real fans</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`bg-card rounded-xl p-6 border border-border stagger-animation stagger-${index + 1}`}
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "fill-accent text-accent" : "text-border"}`}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-foreground mb-4 leading-relaxed">"{review.comment}"</p>

              {/* Product */}
              <p className="text-xs text-muted-foreground mb-4">Purchased: {review.product}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar || "/placeholder.svg"}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">4.9</p>
            <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground">2,500+</p>
            <p className="text-sm text-muted-foreground mt-1">5-Star Reviews</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground">50K+</p>
            <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground mt-1">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  )
}
