// Product data for cocoa brand
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  category: string
  subcategory: string
  image: string
  images?: string[]
  description: string
  sizes: string[]
  colors: string[]
  tags: string[]
  isNew?: boolean
  isLimited?: boolean
  rating: number
  reviews: number
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Anime",
    slug: "anime",
    image: "/anime-inspired-streetwear-dark-aesthetic.jpg",
    description: "Express your love for Japanese animation",
    productCount: 24,
  },
  {
    id: "2",
    name: "K-Pop",
    slug: "kpop",
    image: "/kpop-inspired-fashion-dark-aesthetic.jpg",
    description: "Inspired by Korean pop culture",
    productCount: 18,
  },
  {
    id: "3",
    name: "Gaming",
    slug: "gaming",
    image: "/gaming-inspired-streetwear-neon-aesthetic.jpg",
    description: "Level up your style",
    productCount: 21,
  },
  {
    id: "4",
    name: "Oversized",
    slug: "oversized",
    image: "/oversized-streetwear-tshirt-dark.jpg",
    description: "Comfort meets style",
    productCount: 32,
  },
  {
    id: "5",
    name: "Hoodies",
    slug: "hoodies",
    image: "/streetwear-hoodie-dark-aesthetic.jpg",
    description: "Stay cozy, stay cool",
    productCount: 15,
  },
  {
    id: "6",
    name: "Limited Drops",
    slug: "limited",
    image: "/exclusive-limited-edition-streetwear.jpg",
    description: "Exclusive releases",
    productCount: 8,
  },
]

// Prices in LKR (Sri Lankan Rupees)
export const products: Product[] = [
  {
    id: "1",
    name: "Neon Dreams Oversized Tee",
    price: 4500,
    category: "anime",
    subcategory: "oversized",
    image: "/oversized-black-tshirt-anime-inspired-neon-graphic.jpg",
    description:
      "A premium oversized tee featuring anime-inspired neon graphics. Made from 100% cotton for ultimate comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy"],
    tags: ["anime", "oversized", "neon"],
    isNew: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Idol Wave Crop Hoodie",
    price: 6800,
    originalPrice: 8500,
    category: "kpop",
    subcategory: "hoodies",
    image: "/cropped-hoodie-kpop-inspired-streetwear-pink-accen.jpg",
    description: "K-pop inspired cropped hoodie with signature wave design. Perfect for concerts and everyday wear.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Pink", "Lavender"],
    tags: ["kpop", "hoodie", "cropped"],
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Pixel Warrior Jersey",
    price: 5500,
    category: "gaming",
    subcategory: "basic",
    image: "/gaming-jersey-tshirt-pixel-art-dark-theme.jpg",
    description:
      "Rep your gamer status with this pixel art inspired jersey. Moisture-wicking fabric for long gaming sessions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Purple", "Green"],
    tags: ["gaming", "jersey", "pixel"],
    isNew: true,
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "4",
    name: "Sakura Spirit Tee",
    price: 4200,
    category: "anime",
    subcategory: "basic",
    image: "/japanese-cherry-blossom-tshirt-anime-aesthetic.jpg",
    description: "Delicate sakura-inspired design celebrating Japanese anime culture. Soft cotton blend.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Pink"],
    tags: ["anime", "sakura", "japanese"],
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "5",
    name: "Seoul Nights Hoodie",
    price: 7800,
    category: "kpop",
    subcategory: "hoodies",
    image: "/korean-streetwear-hoodie-neon-city-lights.jpg",
    description: "Premium heavyweight hoodie with Seoul city lights graphic. Korean street style at its finest.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray"],
    tags: ["kpop", "hoodie", "seoul"],
    isLimited: true,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "6",
    name: "Boss Level Oversized",
    price: 4800,
    category: "gaming",
    subcategory: "oversized",
    image: "/gaming-oversized-tshirt-boss-level-graphic-dark.jpg",
    description: "Show everyone you are on boss level. Ultra-soft oversized fit with gaming-inspired graphics.",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal"],
    tags: ["gaming", "oversized", "boss"],
    rating: 4.5,
    reviews: 78,
  },
  {
    id: "7",
    name: "Mecha Core Tee",
    price: 4400,
    category: "anime",
    subcategory: "basic",
    image: "/mecha-robot-anime-tshirt-dark-industrial.jpg",
    description: "Inspired by classic mecha anime. Industrial-style graphics on premium cotton.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Red"],
    tags: ["anime", "mecha", "robot"],
    rating: 4.7,
    reviews: 92,
  },
  {
    id: "8",
    name: "Bias Wrecker Crop",
    price: 3800,
    originalPrice: 4800,
    category: "kpop",
    subcategory: "basic",
    image: "/cropped-tshirt-kpop-fan-streetwear.jpg",
    description: "For when your bias changes every comeback. Cropped fit, bold statement.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "White", "Purple"],
    tags: ["kpop", "cropped", "fan"],
    isNew: true,
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "9",
    name: "Cyber Punk Oversized",
    price: 5200,
    category: "gaming",
    subcategory: "oversized",
    image: "/gaming-inspired-streetwear-neon-aesthetic.jpg",
    description: "Futuristic cyber punk design for gamers who live in the future. Oversized comfort fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Neon Green"],
    tags: ["gaming", "cyberpunk", "oversized"],
    rating: 4.6,
    reviews: 58,
  },
  {
    id: "10",
    name: "Anime Eyes Hoodie",
    price: 7200,
    category: "anime",
    subcategory: "hoodies",
    image: "/streetwear-hoodie-dark-aesthetic.jpg",
    description: "Iconic anime eyes design on a premium heavyweight hoodie. Cozy and expressive.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    tags: ["anime", "hoodie", "eyes"],
    isNew: true,
    rating: 4.9,
    reviews: 187,
  },
  {
    id: "11",
    name: "Stage Presence Tee",
    price: 4000,
    category: "kpop",
    subcategory: "basic",
    image: "/kpop-inspired-fashion-dark-aesthetic.jpg",
    description: "Designed for those who command attention. K-pop inspired with bold graphics.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Pink", "White"],
    tags: ["kpop", "stage", "idol"],
    rating: 4.5,
    reviews: 112,
  },
  {
    id: "12",
    name: "Retro Console Tee",
    price: 4200,
    category: "gaming",
    subcategory: "basic",
    image: "/exclusive-limited-edition-streetwear.jpg",
    description: "Nostalgic retro gaming vibes on modern streetwear. For the OG gamers.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Gray", "Red"],
    tags: ["gaming", "retro", "console"],
    isLimited: true,
    rating: 4.8,
    reviews: 94,
  },
]

export const featuredProducts = products.filter((p) => p.isNew || p.isLimited).slice(0, 4)

export const limitedDrops = [
  {
    id: "drop-1",
    name: "AKIRA 2025 Collection",
    description: "Limited collaboration inspired by neo-Tokyo aesthetics",
    releaseDate: "2025-01-15",
    image: "/akira-inspired-neo-tokyo-streetwear-collection.jpg",
    itemCount: 5,
  },
  {
    id: "drop-2",
    name: "Player One Pack",
    description: "Exclusive gaming collection - only 100 pieces each",
    releaseDate: "2025-01-20",
    image: "/placeholder.svg?height=800&width=600",
    itemCount: 3,
  },
]

export const reviews = [
  {
    id: "1",
    name: "Alex K.",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    comment: "The quality is insane! The oversized fit is perfect and the anime print is so detailed.",
    product: "Neon Dreams Oversized Tee",
    date: "2024-12-15",
  },
  {
    id: "2",
    name: "Mia L.",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    comment: "Finally found a brand that gets K-pop fashion. The Seoul Nights hoodie is now my favorite!",
    product: "Seoul Nights Hoodie",
    date: "2024-12-10",
  },
  {
    id: "3",
    name: "Jordan T.",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    comment: "Perfect for streaming. The gaming designs are fire and not cringe like other brands.",
    product: "Pixel Warrior Jersey",
    date: "2024-12-08",
  },
]
