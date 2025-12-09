"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Heart, ShoppingBag, X, ArrowRight } from "lucide-react"

// Sample wishlist data
const initialWishlist = ["1", "4", "5", "8"]

export default function WishlistPage() {
  const [wishlistIds, setWishlistIds] = useState<string[]>(initialWishlist)

  const wishlistProducts = products.filter((p) => wishlistIds.includes(p.id))

  const removeFromWishlist = (id: string) => {
    setWishlistIds(wishlistIds.filter((wid) => wid !== id))
  }

  if (wishlistProducts.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">Save items you love and come back to them later.</p>
            <Link href="/shop">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">Explore Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Wishlist</h1>
              <p className="text-muted-foreground mt-1">{wishlistProducts.length} saved items</p>
            </div>
            <Link href="/shop">
              <Button variant="outline" className="bg-transparent border-border group">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Wishlist Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {wishlistProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card mb-4">
                  <Link href={`/product/${product.id}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  {/* Add to Cart */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 text-sm">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product Info - Updated to LKR */}
                <div className="space-y-1">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-medium text-foreground text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </Link>
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
      </main>

      <Footer />
    </div>
  )
}
