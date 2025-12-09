"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getStoredAuth, type User } from "@/lib/auth"
import { Search, Bell, Menu } from "lucide-react"

interface AdminHeaderProps {
  onMenuClick?: () => void
}

export function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const auth = getStoredAuth()
    setUser(auth.user)
  }, [])

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden sm:block relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search..." className="w-64 pl-10 bg-background border-border" />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
            {user?.name?.charAt(0) || "A"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">{user?.name || "Admin"}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
