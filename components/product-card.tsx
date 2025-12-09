"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Heart, ShoppingBag, Star } from "lucide-react"

interface ProductCardProps {
  product: Product
  onAddToWishlist?: (product: Product) => void
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToWishlist, onAddToCart }: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card mb-4">
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
            <button
              onClick={(e) => {
                e.preventDefault()
                onAddToWishlist?.(product)
              }}
              className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Heart className="h-4 w-4" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
                onAddToCart?.(product)
              }}
              className="w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ShoppingBag className="h-4 w-4" />
            </button>
          </div>

          {/* Quick add */}
          <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
            <Button
              onClick={(e) => {
                e.preventDefault()
                onAddToCart?.(product)
              }}
              className="w-full bg-foreground text-background hover:bg-foreground/90 text-sm"
            >
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
        <Link href={`/product/${product.id}`}>
          <h3 className="font-medium text-foreground text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  )
}
