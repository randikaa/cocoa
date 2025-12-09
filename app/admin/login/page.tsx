"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginUser } from "@/lib/auth"
import { Eye, EyeOff, Loader2, ShieldCheck } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 500))

    const result = loginUser(email, password)
    setIsLoading(false)

    if (result.success) {
      if (result.user?.role === "admin") {
        router.push("/admin")
      } else {
        setError("Access denied. Admin credentials required.")
      }
    } else {
      setError(result.error || "Login failed")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Admin Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Admin Portal</span>
          </div>
        </div>

        {/* Card */}
        <div className="bg-card rounded-2xl border border-border p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-foreground">
              cocoa
            </Link>
            <h1 className="text-xl font-semibold text-foreground mt-4">Admin Sign In</h1>
            <p className="text-muted-foreground text-sm mt-1">Access the admin dashboard</p>
          </div>

          {/* Demo credentials */}
          <div className="bg-background border border-border rounded-lg p-4 mb-6">
            <p className="text-xs text-muted-foreground">
              <strong className="text-foreground">Demo Admin:</strong> admin@cocoa.lk / admin123
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Admin Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@cocoa.lk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background border-border h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in to Admin"
              )}
            </Button>
          </form>

          {/* Back to store */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/" className="text-primary hover:underline">
              Back to store
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
