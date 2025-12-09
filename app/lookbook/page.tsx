"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Instagram } from "lucide-react"

const lookbookImages = [
  {
    id: "1",
    src: "/oversized-black-tshirt-anime-inspired-neon-graphic.jpg",
    alt: "Model wearing Neon Dreams oversized tee",
    category: "Anime",
    product: "Neon Dreams Oversized Tee",
    productId: "1",
  },
  {
    id: "2",
    src: "/korean-streetwear-hoodie-neon-city-lights.jpg",
    alt: "Seoul Nights hoodie street style",
    category: "K-Pop",
    product: "Seoul Nights Hoodie",
    productId: "5",
  },
  {
    id: "3",
    src: "/gaming-jersey-tshirt-pixel-art-dark-theme.jpg",
    alt: "Pixel Warrior jersey gaming setup",
    category: "Gaming",
    product: "Pixel Warrior Jersey",
    productId: "3",
  },
  {
    id: "4",
    src: "/japanese-cherry-blossom-tshirt-anime-aesthetic.jpg",
    alt: "Sakura Spirit tee spring vibes",
    category: "Anime",
    product: "Sakura Spirit Tee",
    productId: "4",
  },
  {
    id: "5",
    src: "/cropped-hoodie-kpop-inspired-streetwear-pink-accen.jpg",
    alt: "Idol Wave crop hoodie concert look",
    category: "K-Pop",
    product: "Idol Wave Crop Hoodie",
    productId: "2",
  },
  {
    id: "6",
    src: "/gaming-oversized-tshirt-boss-level-graphic-dark.jpg",
    alt: "Boss Level oversized gaming style",
    category: "Gaming",
    product: "Boss Level Oversized",
    productId: "6",
  },
  {
    id: "7",
    src: "/mecha-robot-anime-tshirt-dark-industrial.jpg",
    alt: "Mecha Core tee industrial vibes",
    category: "Anime",
    product: "Mecha Core Tee",
    productId: "7",
  },
  {
    id: "8",
    src: "/cropped-tshirt-kpop-fan-streetwear.jpg",
    alt: "Bias Wrecker crop street style",
    category: "K-Pop",
    product: "Bias Wrecker Crop",
    productId: "8",
  },
]

const categories = ["All", "Anime", "K-Pop", "Gaming"]

export default function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<(typeof lookbookImages)[0] | null>(null)

  const filteredImages =
    activeCategory === "All" ? lookbookImages : lookbookImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">Lookbook</h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Street style inspiration from our community. See how fans are styling their cocoa gear.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-center gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className={`group relative overflow-hidden rounded-xl bg-card ${
                    index % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <div className={`relative ${index % 5 === 0 ? "aspect-square" : "aspect-[3/4]"}`}>
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-primary uppercase tracking-wider mb-1">{image.category}</span>
                      <span className="text-sm font-medium text-foreground">{image.product}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-card rounded-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-square">
                  <img
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="text-sm text-primary uppercase tracking-wider mb-2">{selectedImage.category}</span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{selectedImage.product}</h3>
                  <p className="text-muted-foreground mb-6">
                    Styled by our community. Shop this look and create your own vibe.
                  </p>
                  <Link href={`/product/${selectedImage.productId}`}>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                      Shop This Look
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Instagram CTA */}
        <section className="py-12 sm:py-20 bg-card">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Instagram className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Get Featured</h2>
            <p className="text-muted-foreground mb-6">
              Share your cocoa style on Instagram with #cocoastyle for a chance to be featured in our lookbook.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              Follow @cocoa.style
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
