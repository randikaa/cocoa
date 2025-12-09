"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { featuredProducts } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Heart, ShoppingBag, Star, ArrowRight } from "lucide-react"

export function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Fresh Drops</h2>
            <p className="text-muted-foreground mt-2">The latest additions to the crew</p>
          </div>
          <Link href="/shop">
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-background group bg-transparent"
            >
              Shop All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`group stagger-animation stagger-${index + 1}`}>
              <Link href={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-background mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                    {product.isLimited && <Badge className="bg-accent text-accent-foreground">Limited</Badge>}
                    {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
                  </div>

                  {/* Quick actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Quick add */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 text-sm">
                      Quick Add
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                <h3 className="font-medium text-foreground text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-foreground">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
