import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Anime Collection", href: "/shop?category=anime" },
    { name: "K-Pop Collection", href: "/shop?category=kpop" },
    { name: "Gaming Collection", href: "/shop?category=gaming" },
    { name: "Limited Drops", href: "/limited" },
  ],
  support: [
    { name: "Size Guide", href: "/size-guide" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Track Order", href: "/track" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Lookbook", href: "/lookbook" },
    { name: "Reviews", href: "/reviews" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight text-foreground">
              cocoa
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              Express your fandom through fashion. Anime, K-pop, and gaming inspired streetwear for the culture.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground mb-3">Join the crew</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-background border-border" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Get 10% off your first order + early access to drops</p>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 cocoa. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <img src="/placeholder.svg?height=24&width=40" alt="Visa" className="h-6 opacity-50" />
            <img src="/placeholder.svg?height=24&width=40" alt="Mastercard" className="h-6 opacity-50" />
            <img src="/placeholder.svg?height=24&width=40" alt="PayPal" className="h-6 opacity-50" />
            <img src="/placeholder.svg?height=24&width=40" alt="Apple Pay" className="h-6 opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  )
}
