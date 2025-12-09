"use client"

import { useState, use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  Shield,
  ChevronLeft,
  Minus,
  Plus,
  Check,
  Share2,
  Ruler,
} from "lucide-react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const product = products.find((p) => p.id === resolvedParams.id)

  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Button onClick={() => router.push("/shop")} className="bg-primary text-primary-foreground">
            Back to Shop
          </Button>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    if (!selectedColor) {
      alert("Please select a color")
      return
    }
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground py-6">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            <span>/</span>
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-foreground transition-colors capitalize"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>

          {/* Product Detail */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-card">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-primary text-primary-foreground">New</Badge>}
                  {product.isLimited && <Badge className="bg-accent text-accent-foreground">Limited</Badge>}
                  {product.originalPrice && <Badge variant="destructive">Sale</Badge>}
                </div>
              </div>
              {/* Thumbnail Grid */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className={`aspect-square rounded-lg overflow-hidden bg-card border-2 transition-colors ${
                      i === 1 ? "border-primary" : "border-transparent hover:border-border"
                    }`}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category & Rating */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">{product.category}</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-medium text-foreground">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Name */}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{product.name}</h1>

              {/* Price - Updated to LKR */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <Badge variant="destructive">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Color Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Color</span>
                  {selectedColor && <span className="text-sm text-muted-foreground">{selectedColor}</span>}
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => {
                    const colorMap: Record<string, string> = {
                      Black: "#000000",
                      White: "#FFFFFF",
                      Gray: "#6B7280",
                      Charcoal: "#374151",
                      Pink: "#EC4899",
                      Lavender: "#A78BFA",
                      Purple: "#8B5CF6",
                      Navy: "#1E3A8A",
                      Red: "#EF4444",
                      Green: "#22C55E",
                      "Neon Green": "#22C55E",
                    }
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center ${
                          selectedColor === color
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "hover:scale-110"
                        }`}
                        style={{
                          backgroundColor: colorMap[color] || "#6B7280",
                          borderColor: color === "White" ? "#374151" : colorMap[color] || "#6B7280",
                        }}
                        title={color}
                      >
                        {selectedColor === color && (
                          <Check className={`h-4 w-4 ${color === "White" ? "text-black" : "text-white"}`} />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Size</span>
                  <Link href="/size-guide" className="text-sm text-primary hover:underline flex items-center gap-1">
                    <Ruler className="h-3 w-3" />
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-foreground">Quantity</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className={`flex-1 h-12 text-base font-medium transition-all ${
                    addedToCart
                      ? "bg-green-600 hover:bg-green-600"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`h-12 px-4 bg-transparent border-border ${isWishlisted ? "text-red-500 border-red-500" : "text-foreground"}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-4 bg-transparent border-border text-foreground">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges - Updated to LKR */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Free shipping over Rs. 5,000</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-5 w-5 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">30-day returns</p>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">Secure checkout</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0">
                <TabsTrigger
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Details
                </TabsTrigger>
                <TabsTrigger
                  value="sizing"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Sizing
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Shipping
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                >
                  Reviews ({product.reviews})
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground">{product.description}</p>
                  <h4 className="text-foreground mt-6 mb-3">Features</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>Premium 100% cotton fabric</li>
                    <li>Pre-shrunk for consistent fit</li>
                    <li>High-quality screen printing</li>
                    <li>Reinforced stitching</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="sizing" className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 pr-4 text-foreground font-medium">Size</th>
                        <th className="text-left py-3 px-4 text-foreground font-medium">Chest (in)</th>
                        <th className="text-left py-3 px-4 text-foreground font-medium">Length (in)</th>
                        <th className="text-left py-3 px-4 text-foreground font-medium">Shoulder (in)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">S</td>
                        <td className="py-3 px-4">38</td>
                        <td className="py-3 px-4">27</td>
                        <td className="py-3 px-4">17</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">M</td>
                        <td className="py-3 px-4">40</td>
                        <td className="py-3 px-4">28</td>
                        <td className="py-3 px-4">18</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">L</td>
                        <td className="py-3 px-4">42</td>
                        <td className="py-3 px-4">29</td>
                        <td className="py-3 px-4">19</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">XL</td>
                        <td className="py-3 px-4">44</td>
                        <td className="py-3 px-4">30</td>
                        <td className="py-3 px-4">20</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">XXL</td>
                        <td className="py-3 px-4">46</td>
                        <td className="py-3 px-4">31</td>
                        <td className="py-3 px-4">21</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="shipping" className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Standard Shipping:</strong> 5-7 business days - Rs. 500 (Free
                    over Rs. 5,000)
                  </p>
                  <p>
                    <strong className="text-foreground">Express Shipping:</strong> 2-3 business days - Rs. 1,200
                  </p>
                  <p>
                    <strong className="text-foreground">International:</strong> 10-14 business days - Calculated at
                    checkout
                  </p>
                  <p className="pt-4">
                    <strong className="text-foreground">Returns:</strong> We offer free returns within 30 days of
                    purchase. Items must be unworn with tags attached.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-foreground">{product.rating}</div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-border"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">Based on {product.reviews} reviews</p>
                    </div>
                  </div>
                  {/* Sample reviews */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div className="bg-card rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-foreground">Alex K.</span>
                        <span className="text-xs text-muted-foreground">Verified Purchase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Amazing quality! The print is super detailed and the fit is exactly what I wanted. Will
                        definitely buy more.
                      </p>
                    </div>
                    <div className="bg-card rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < 4 ? "fill-accent text-accent" : "text-border"}`} />
                          ))}
                        </div>
                        <span className="text-sm font-medium text-foreground">Sarah M.</span>
                        <span className="text-xs text-muted-foreground">Verified Purchase</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Love the design! Shipping was fast and the packaging was great. Only wish there were more color
                        options.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-foreground mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
