"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { formatPrice } from "@/lib/currency"
import { SlidersHorizontal } from "lucide-react"

interface FilterState {
  categories: string[]
  subcategories: string[]
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
  onSale: boolean
  newArrivals: boolean
  limited: boolean
}

interface ShopFiltersProps {
  filters: FilterState
  onFilterChange: (filters: FilterState) => void
  onClearFilters: () => void
  productCount: number
}

const categoryOptions = [
  { id: "anime", label: "Anime" },
  { id: "kpop", label: "K-Pop" },
  { id: "gaming", label: "Gaming" },
]

const subcategoryOptions = [
  { id: "oversized", label: "Oversized Tees" },
  { id: "basic", label: "Basic Tees" },
  { id: "hoodies", label: "Hoodies" },
  { id: "cropped", label: "Cropped" },
]

const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"]

const colorOptions = [
  { id: "Black", hex: "#000000" },
  { id: "White", hex: "#FFFFFF" },
  { id: "Gray", hex: "#6B7280" },
  { id: "Pink", hex: "#EC4899" },
  { id: "Purple", hex: "#8B5CF6" },
  { id: "Navy", hex: "#1E3A8A" },
  { id: "Red", hex: "#EF4444" },
  { id: "Green", hex: "#22C55E" },
]

function FilterContent({ filters, onFilterChange, onClearFilters }: Omit<ShopFiltersProps, "productCount">) {
  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    onFilterChange({ ...filters, [key]: value })
  }

  const toggleArrayFilter = (key: "categories" | "subcategories" | "sizes" | "colors", value: string) => {
    const current = filters[key]
    const updated = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
    updateFilter(key, updated)
  }

  const activeFilterCount =
    filters.categories.length +
    filters.subcategories.length +
    filters.sizes.length +
    filters.colors.length +
    (filters.onSale ? 1 : 0) +
    (filters.newArrivals ? 1 : 0) +
    (filters.limited ? 1 : 0) +
    (filters.priceRange[0] > 0 || filters.priceRange[1] < 15000 ? 1 : 0)

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      {activeFilterCount > 0 && (
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <span className="text-sm text-muted-foreground">{activeFilterCount} filters active</span>
          <Button variant="ghost" size="sm" onClick={onClearFilters} className="text-primary hover:text-primary/80">
            Clear all
          </Button>
        </div>
      )}

      <Accordion type="multiple" defaultValue={["category", "type", "size", "color", "price"]} className="space-y-2">
        {/* Category */}
        <AccordionItem value="category" className="border-b border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">Category</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="space-y-3">
              {categoryOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={filters.categories.includes(option.id)}
                    onCheckedChange={() => toggleArrayFilter("categories", option.id)}
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Product Type */}
        <AccordionItem value="type" className="border-b border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">Product Type</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="space-y-3">
              {subcategoryOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                  <Checkbox
                    checked={filters.subcategories.includes(option.id)}
                    onCheckedChange={() => toggleArrayFilter("subcategories", option.id)}
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size */}
        <AccordionItem value="size" className="border-b border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">Size</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleArrayFilter("sizes", size)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${
                    filters.sizes.includes(size)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background border-border text-foreground hover:border-foreground"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Color */}
        <AccordionItem value="color" className="border-b border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">Color</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="flex flex-wrap gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => toggleArrayFilter("colors", color.id)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    filters.colors.includes(color.id) ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                  }`}
                  style={{ backgroundColor: color.hex, borderColor: color.id === "White" ? "#374151" : color.hex }}
                  title={color.id}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range - Updated to LKR */}
        <AccordionItem value="price" className="border-b border-border">
          <AccordionTrigger className="text-sm font-medium hover:no-underline">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <div className="space-y-4">
              <Slider
                value={filters.priceRange}
                onValueChange={(value) => updateFilter("priceRange", value as [number, number])}
                max={15000}
                min={0}
                step={500}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{formatPrice(filters.priceRange[0])}</span>
                <span>{formatPrice(filters.priceRange[1])}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Quick Filters */}
      <div className="space-y-3 pt-4">
        <p className="text-sm font-medium text-foreground">Quick Filters</p>
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={filters.onSale}
            onCheckedChange={(checked) => updateFilter("onSale", checked as boolean)}
          />
          <span className="text-sm text-foreground">On Sale</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={filters.newArrivals}
            onCheckedChange={(checked) => updateFilter("newArrivals", checked as boolean)}
          />
          <span className="text-sm text-foreground">New Arrivals</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <Checkbox
            checked={filters.limited}
            onCheckedChange={(checked) => updateFilter("limited", checked as boolean)}
          />
          <span className="text-sm text-foreground">Limited Edition</span>
        </label>
      </div>
    </div>
  )
}

export function ShopFilters({ filters, onFilterChange, onClearFilters, productCount }: ShopFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full bg-transparent border-border">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-background border-border">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-foreground">Filters</SheetTitle>
            </SheetHeader>
            <FilterContent filters={filters} onFilterChange={onFilterChange} onClearFilters={onClearFilters} />
            <div className="mt-6 pt-6 border-t border-border">
              <Button className="w-full bg-primary text-primary-foreground" onClick={() => setIsOpen(false)}>
                Show {productCount} Products
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters Sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <h2 className="text-lg font-semibold text-foreground mb-6">Filters</h2>
          <FilterContent filters={filters} onFilterChange={onFilterChange} onClearFilters={onClearFilters} />
        </div>
      </aside>
    </>
  )
}
