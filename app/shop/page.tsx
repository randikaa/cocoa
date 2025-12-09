"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop-filters"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3, LayoutGrid } from "lucide-react"

type SortOption = "featured" | "newest" | "price-low" | "price-high" | "rating"

const defaultFilters = {
  categories: [] as string[],
  subcategories: [] as string[],
  sizes: [] as string[],
  colors: [] as string[],
  priceRange: [0, 150] as [number, number],
  onSale: false,
  newArrivals: false,
  limited: false,
}

export default function ShopPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [filters, setFilters] = useState({
    ...defaultFilters,
    categories: categoryParam ? [categoryParam] : [],
  })
  const [sortBy, setSortBy] = useState<SortOption>("featured")
  const [gridCols, setGridCols] = useState<3 | 4>(4)

  // Update filters when URL params change
  useEffect(() => {
    if (categoryParam) {
      setFilters((prev) => ({
        ...prev,
        categories: [categoryParam],
      }))
    }
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false
      }

      // Subcategory filter
      if (filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory)) {
        return false
      }

      // Size filter
      if (filters.sizes.length > 0 && !filters.sizes.some((size) => product.sizes.includes(size))) {
        return false
      }

      // Color filter
      if (filters.colors.length > 0 && !filters.colors.some((color) => product.colors.includes(color))) {
        return false
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Quick filters
      if (filters.onSale && !product.originalPrice) {
        return false
      }
      if (filters.newArrivals && !product.isNew) {
        return false
      }
      if (filters.limited && !product.isLimited) {
        return false
      }

      return true
    })
  }, [filters])

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts]
    switch (sortBy) {
      case "newest":
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price)
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price)
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating)
      default:
        return sorted
    }
  }, [filteredProducts, sortBy])

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  const getCategoryTitle = () => {
    if (filters.categories.length === 1) {
      const cat = filters.categories[0]
      return cat.charAt(0).toUpperCase() + cat.slice(1)
    }
    return "All Products"
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{getCategoryTitle()}</h1>
            <p className="text-muted-foreground mt-2">
              {sortedProducts.length} {sortedProducts.length === 1 ? "product" : "products"}
            </p>
          </div>

          <div className="flex gap-8">
            {/* Filters */}
            <ShopFilters
              filters={filters}
              onFilterChange={setFilters}
              onClearFilters={clearFilters}
              productCount={sortedProducts.length}
            />

            {/* Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-border">
                {/* Sort */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-40 bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Grid Toggle */}
                <div className="hidden lg:flex items-center gap-1 bg-card rounded-lg p-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${gridCols === 3 ? "bg-background" : ""}`}
                    onClick={() => setGridCols(3)}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 ${gridCols === 4 ? "bg-background" : ""}`}
                    onClick={() => setGridCols(4)}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Grid */}
              {sortedProducts.length > 0 ? (
                <div
                  className={`grid gap-4 sm:gap-6 ${
                    gridCols === 3 ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-2 lg:grid-cols-4"
                  }`}
                >
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl font-medium text-foreground mb-2">No products found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters</p>
                  <Button onClick={clearFilters} className="bg-primary text-primary-foreground">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
