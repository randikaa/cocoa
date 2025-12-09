"use client"

import Link from "next/link"
import { categories } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export function CategoryGrid() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Shop by Vibe</h2>
            <p className="text-muted-foreground mt-2">Find your aesthetic</p>
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
          >
            View All Collections
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.slice(0, 6).map((category, index) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-xl bg-card stagger-animation stagger-${index + 1} ${
                index === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${index === 0 ? "aspect-[4/5] lg:aspect-[3/4]" : "aspect-square sm:aspect-[4/5]"}`}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 hidden sm:block">{category.description}</p>
                  <p className="text-xs text-muted-foreground mt-2">{category.productCount} products</p>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5 text-foreground" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
