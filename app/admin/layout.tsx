"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getStoredAuth } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  // Skip auth check for login page
  const isLoginPage = pathname === "/admin/login"

  useEffect(() => {
    if (isLoginPage) {
      setIsLoading(false)
      return
    }

    const auth = getStoredAuth()
    if (!auth.isAuthenticated || auth.user?.role !== "admin") {
      router.push("/admin/login")
    } else {
      setIsLoading(false)
    }
  }, [router, isLoginPage])

  // Show login page without layout
  if (isLoginPage) {
    return <>{children}</>
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className={`transition-all duration-300 ${sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"}`}>
        <AdminHeader onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
