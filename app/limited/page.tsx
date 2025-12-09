"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Bell, Clock, Sparkles, ArrowRight, Calendar } from "lucide-react"

const drops = [
  {
    id: "akira-2025",
    name: "AKIRA 2025 Collection",
    description: "Limited collaboration inspired by neo-Tokyo aesthetics. Cyberpunk meets streetwear.",
    releaseDate: new Date("2025-01-15T12:00:00"),
    image: "/akira-inspired-neo-tokyo-streetwear-collection.jpg",
    items: 5,
    status: "upcoming" as const,
  },
  {
    id: "player-one",
    name: "Player One Pack",
    description: "Exclusive gaming collection - only 100 pieces each. For the true gamers.",
    releaseDate: new Date("2025-01-20T15:00:00"),
    image: "/gaming-inspired-streetwear-neon-aesthetic.jpg",
    items: 3,
    status: "upcoming" as const,
  },
  {
    id: "seoul-after-dark",
    name: "Seoul After Dark",
    description: "K-pop inspired nightlife collection. Neon lights and city vibes.",
    releaseDate: new Date("2024-12-01T12:00:00"),
    image: "/kpop-inspired-fashion-dark-aesthetic.jpg",
    items: 4,
    status: "live" as const,
  },
]

function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-3 sm:gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-background rounded-lg px-3 py-2 sm:px-4 sm:py-3 border border-border">
            <span className="text-xl sm:text-2xl font-bold text-foreground">{value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1 block uppercase">{unit}</span>
        </div>
      ))}
    </div>
  )
}

export default function LimitedDropsPage() {
  const [email, setEmail] = useState("")
  const [isNotified, setIsNotified] = useState(false)

  const limitedProducts = products.filter((p) => p.isLimited)
  const upcomingDrops = drops.filter((d) => d.status === "upcoming")
  const liveDrop = drops.find((d) => d.status === "live")

  const handleNotify = () => {
    if (email) {
      setIsNotified(true)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        {/* Hero */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Exclusive Releases</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Limited Drops
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Exclusive collections that sell out fast. Once they are gone, they are gone forever.
            </p>
          </div>
        </section>

        {/* Live Drop */}
        {liveDrop && (
          <section className="py-12 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-8">
                <Badge className="bg-primary text-primary-foreground animate-pulse">Live Now</Badge>
                <h2 className="text-2xl font-bold text-foreground">{liveDrop.name}</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-background">
                  <img
                    src={liveDrop.image || "/placeholder.svg"}
                    alt={liveDrop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground">{liveDrop.description}</p>
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary font-medium">{liveDrop.items} items</span> in this collection
                  </p>
                  <Link href="/shop?limited=true">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 group">
                      Shop Collection
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Upcoming Drops */}
        <section className="py-12 sm:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Upcoming Drops</h2>

            <div className="space-y-8">
              {upcomingDrops.map((drop) => (
                <div
                  key={drop.id}
                  className="bg-card rounded-2xl border border-border overflow-hidden grid lg:grid-cols-2"
                >
                  <div className="relative aspect-[16/9] lg:aspect-auto">
                    <img
                      src={drop.image || "/placeholder.svg"}
                      alt={drop.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden" />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="h-4 w-4 text-accent" />
                      <Badge variant="outline" className="border-accent text-accent">
                        Coming Soon
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{drop.name}</h3>
                    <p className="text-muted-foreground mb-4">{drop.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                      <Calendar className="h-4 w-4" />
                      <span>
                        Drops{" "}
                        {drop.releaseDate.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        at{" "}
                        {drop.releaseDate.toLocaleTimeString("en-US", {
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    <CountdownTimer targetDate={drop.releaseDate} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Currently Available Limited Products */}
        {limitedProducts.length > 0 && (
          <section className="py-12 sm:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Limited Edition - Still Available</h2>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {limitedProducts.map((product) => (
                  <Link key={product.id} href={`/product/${product.id}`} className="group">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-background mb-4">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">Limited</Badge>
                    </div>
                    <h3 className="font-medium text-foreground text-sm sm:text-base line-clamp-1 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-bold text-foreground mt-1">{formatPrice(product.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Notification Signup */}
        <section className="py-12 sm:py-20 bg-background">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Bell className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Never Miss a Drop</h2>
            <p className="text-muted-foreground mb-8">
              Get notified the moment new limited editions go live. Early access for subscribers.
            </p>

            {isNotified ? (
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <p className="text-foreground font-medium">You are on the list! We will notify you first.</p>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card border-border h-12"
                />
                <Button onClick={handleNotify} className="bg-primary text-primary-foreground h-12 px-6">
                  Notify Me
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
