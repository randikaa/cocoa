"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Loader2, Upload } from "lucide-react"

const categories = ["anime", "kpop", "gaming"]
const subcategories = ["oversized", "basic", "hoodies", "cropped"]
const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
const colors = ["Black", "White", "Gray", "Pink", "Purple", "Navy", "Red", "Green"]

export default function NewProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    category: "",
    subcategory: "",
    description: "",
    sizes: [] as string[],
    colors: [] as string[],
    isNew: false,
    isLimited: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real app, save to database
    console.log("New product:", formData)

    setIsLoading(false)
    router.push("/admin/products")
  }

  const toggleSize = (size: string) => {
    setFormData((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size) ? prev.sizes.filter((s) => s !== size) : [...prev.sizes, size],
    }))
  }

  const toggleColor = (color: string) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.includes(color) ? prev.colors.filter((c) => c !== color) : [...prev.colors, color],
    }))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Link href="/admin/products">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Add New Product</h1>
          <p className="text-muted-foreground">Create a new product listing</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="bg-background border-border min-h-24"
                    placeholder="Enter product description"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat} className="capitalize">
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subcategory">Product Type</Label>
                    <Select
                      value={formData.subcategory}
                      onValueChange={(value) => setFormData({ ...formData, subcategory: value })}
                    >
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {subcategories.map((sub) => (
                          <SelectItem key={sub} value={sub} className="capitalize">
                            {sub}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Variants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Sizes</Label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                          formData.sizes.includes(size)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Colors</Label>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() => toggleColor(color)}
                        className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                          formData.colors.includes(color)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-background border-border text-foreground hover:border-foreground"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Media</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">Drag and drop images here, or click to browse</p>
                  <Button type="button" variant="outline" className="bg-transparent border-border">
                    Upload Images
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price (LKR)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-background border-border"
                    placeholder="0"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="originalPrice">Compare at Price (LKR)</Label>
                  <Input
                    id="originalPrice"
                    type="number"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="bg-background border-border"
                    placeholder="0"
                  />
                  <p className="text-xs text-muted-foreground">Leave empty if not on sale</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={formData.isNew}
                    onCheckedChange={(checked) => setFormData({ ...formData, isNew: checked as boolean })}
                  />
                  <div>
                    <p className="font-medium text-foreground">New Arrival</p>
                    <p className="text-xs text-muted-foreground">Mark as new product</p>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={formData.isLimited}
                    onCheckedChange={(checked) => setFormData({ ...formData, isLimited: checked as boolean })}
                  />
                  <div>
                    <p className="font-medium text-foreground">Limited Edition</p>
                    <p className="text-xs text-muted-foreground">Mark as limited drop</p>
                  </div>
                </label>
              </CardContent>
            </Card>

            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1 bg-transparent border-border" asChild>
                <Link href="/admin/products">Cancel</Link>
              </Button>
              <Button type="submit" className="flex-1 bg-primary text-primary-foreground" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Save Product"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
