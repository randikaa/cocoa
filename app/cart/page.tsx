"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Minus, Plus, X, ShoppingBag, ArrowRight, Truck, Shield, Tag } from "lucide-react"

interface CartItem {
  productId: string
  size: string
  color: string
  quantity: number
}

// Sample cart data
const initialCart: CartItem[] = [
  { productId: "1", size: "L", color: "Black", quantity: 1 },
  { productId: "5", size: "M", color: "Black", quantity: 2 },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart)
  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)

  const getProduct = (id: string) => products.find((p) => p.id === id)

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return
    const updated = [...cartItems]
    updated[index].quantity = quantity
    setCartItems(updated)
  }

  const removeItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index))
  }

  const subtotal = cartItems.reduce((total, item) => {
    const product = getProduct(item.productId)
    return total + (product?.price || 0) * item.quantity
  }, 0)

  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 5000 ? 0 : 500
  const total = subtotal - discount + shipping

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "cocoa10") {
      setPromoApplied(true)
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-card flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Looks like you have not added anything to your cart yet.</p>
            <Link href="/shop">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">Start Shopping</Button>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground py-8">Shopping Cart</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => {
                const product = getProduct(item.productId)
                if (!product) return null

                return (
                  <div
                    key={`${item.productId}-${item.size}-${item.color}`}
                    className="bg-card rounded-xl border border-border p-4 sm:p-6"
                  >
                    <div className="flex gap-4 sm:gap-6">
                      {/* Product Image */}
                      <Link href={`/product/${product.id}`} className="flex-shrink-0">
                        <div className="w-24 h-32 sm:w-32 sm:h-40 rounded-lg overflow-hidden bg-background">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <Link href={`/product/${product.id}`}>
                              <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-sm text-muted-foreground mt-1">
                              Size: {item.size} / Color: {item.color}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(index)}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="flex items-end justify-between mt-4">
                          {/* Quantity */}
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-10 text-center text-sm font-medium text-foreground">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>

                          {/* Price - Updated to LKR */}
                          <div className="text-right">
                            <p className="font-semibold text-foreground">
                              {formatPrice(product.price * item.quantity)}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-muted-foreground">{formatPrice(product.price)} each</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                <h2 className="text-lg font-semibold text-foreground mb-6">Order Summary</h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-background border-border"
                      disabled={promoApplied}
                    />
                    <Button
                      variant="outline"
                      onClick={handleApplyPromo}
                      disabled={promoApplied}
                      className="bg-transparent border-border"
                    >
                      {promoApplied ? "Applied" : "Apply"}
                    </Button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-primary mt-2 flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      COCOA10 - 10% discount applied!
                    </p>
                  )}
                </div>

                {/* Totals - Updated to LKR */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">{formatPrice(subtotal)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-primary">
                      <span>Discount (10%)</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-foreground">{shipping === 0 ? "Free" : formatPrice(shipping)}</span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between text-base font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="text-foreground">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium group">
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust Badges - Updated to LKR */}
                <div className="mt-6 pt-6 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Truck className="h-4 w-4 text-primary" />
                    <span>Free shipping on orders over Rs. 5,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Secure checkout with SSL encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
