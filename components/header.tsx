"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getStoredAuth, logoutUser, type User } from "@/lib/auth"
import { Search, Heart, ShoppingBag, Menu, X, UserIcon, LogOut, Settings, ShieldCheck } from "lucide-react"

const navItems = [
  { name: "Shop", href: "/shop" },
  { name: "Anime", href: "/shop?category=anime" },
  { name: "K-Pop", href: "/shop?category=kpop" },
  { name: "Gaming", href: "/shop?category=gaming" },
  { name: "Limited", href: "/limited" },
]

export function Header() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [wishlistCount, setWishlistCount] = useState(0)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)

    // Check auth state
    const auth = getStoredAuth()
    setUser(auth.user)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logoutUser()
    setUser(null)
    router.push("/")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-border w-80">
              <div className="flex flex-col gap-8 pt-8">
                <Link href="/" className="text-3xl font-bold tracking-tight">
                  cocoa
                </Link>
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="border-t border-border pt-4 flex flex-col gap-4">
                  {user ? (
                    <>
                      <div className="flex items-center gap-3 pb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      {user.role === "admin" && (
                        <Link href="/admin" className="text-primary hover:text-primary/80 flex items-center gap-2">
                          <ShieldCheck className="h-4 w-4" />
                          Admin Panel
                        </Link>
                      )}
                      <button onClick={handleLogout} className="text-muted-foreground hover:text-foreground text-left">
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="text-foreground hover:text-primary">
                        Sign In
                      </Link>
                      <Link href="/signup" className="text-foreground hover:text-primary">
                        Create Account
                      </Link>
                    </>
                  )}
                </div>
                <div className="border-t border-border pt-4 flex flex-col gap-4">
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                  <Link href="/size-guide" className="text-muted-foreground hover:text-foreground">
                    Size Guide
                  </Link>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            cocoa
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search */}
            <div className="hidden sm:block">
              {isSearchOpen ? (
                <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-1.5">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="border-0 bg-transparent h-8 w-40 focus-visible:ring-0 text-sm"
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <button onClick={() => setIsSearchOpen(false)}>
                    <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              ) : (
                <Button variant="ghost" size="icon" className="text-foreground" onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </div>

            {/* Wishlist */}
            <Link href="/wishlist">
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <ShoppingBag className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Account - Desktop */}
            <div className="hidden sm:block">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                        {user.name.charAt(0)}
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-card border-border">
                    <div className="px-2 py-1.5">
                      <p className="text-sm font-medium text-foreground">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                    <DropdownMenuSeparator className="bg-border" />
                    {user.role === "admin" && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/admin" className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4" />
                            Admin Panel
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-border" />
                      </>
                    )}
                    <DropdownMenuItem asChild>
                      <Link href="/account" className="flex items-center gap-2">
                        <UserIcon className="h-4 w-4" />
                        My Account
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/account/orders" className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        My Orders
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/account/settings" className="flex items-center gap-2">
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-border" />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link href="/login">
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <UserIcon className="h-5 w-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
