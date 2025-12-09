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
import { Search, Heart, ShoppingBag, Menu, X, UserIcon, LogOut, ShieldCheck } from "lucide-react"

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
    
    const updateAuthState = () => {
      const auth = getStoredAuth()
      setUser(auth.user)
    }

    // Initial auth check
    updateAuthState()

    // Listen for scroll
    window.addEventListener("scroll", handleScroll)
    
    // Listen for auth changes
    window.addEventListener("auth-change", updateAuthState)
    window.addEventListener("storage", updateAuthState)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("auth-change", updateAuthState)
      window.removeEventListener("storage", updateAuthState)
    }
  }, [])

  const handleLogout = () => {
    console.log("Logging out...")
    logoutUser()
    setUser(null)
    router.push("/")
  }

  // Debug: Log user state
  useEffect(() => {
    console.log("Current user:", user)
  }, [user])

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
                user.role === "admin" ? (
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:opacity-80 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                          {user.name.charAt(0)}
                        </div>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56" sideOffset={8}>
                      <div className="px-2 py-1.5">
                        <p className="text-sm font-medium text-foreground">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-primary font-medium mt-1">Admin</p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => router.push("/admin")}
                        className="cursor-pointer"
                      >
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        <span>Admin Dashboard</span>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={handleLogout} 
                        className="cursor-pointer"
                        variant="destructive"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href="/account">
                    <Button variant="ghost" size="icon" className="text-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-medium">
                        {user.name.charAt(0)}
                      </div>
                    </Button>
                  </Link>
                )
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
