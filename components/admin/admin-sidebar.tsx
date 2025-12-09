"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { logoutUser } from "@/lib/auth"
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Tags,
  Settings,
  LogOut,
  ChevronLeft,
  BarChart3,
} from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: Package },
  { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
  { name: "Customers", href: "/admin/customers", icon: Users },
  { name: "Categories", href: "/admin/categories", icon: Tags },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

interface AdminSidebarProps {
  collapsed?: boolean
  onToggle?: () => void
}

export function AdminSidebar({ collapsed = false, onToggle }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    logoutUser()
    router.push("/admin/login")
  }

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-card border-r border-border transition-all duration-300 z-40 ${collapsed ? "w-16" : "w-64"}`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-border">
          {!collapsed && (
            <Link href="/admin" className="text-xl font-bold text-foreground">
              cocoa <span className="text-primary text-sm">admin</span>
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-background hover:text-foreground"
                }`}
                title={collapsed ? item.name : undefined}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="font-medium">{item.name}</span>}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Link href="/" className="block mb-2">
            <Button
              variant="outline"
              className={`w-full bg-transparent border-border justify-start ${collapsed ? "px-0 justify-center" : ""}`}
            >
              <ChevronLeft className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Back to Store</span>}
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={handleLogout}
            className={`w-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 justify-start ${collapsed ? "px-0 justify-center" : ""}`}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  )
}
