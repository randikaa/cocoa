// Simple client-side auth store for demo purposes
// In production, use proper authentication with database integration

export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin"
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

// Demo users for testing
export const DEMO_USERS: Record<string, { password: string; user: User }> = {
  "admin@cocoa.lk": {
    password: "admin123",
    user: {
      id: "admin-1",
      email: "admin@cocoa.lk",
      name: "Admin User",
      role: "admin",
      createdAt: "2024-01-01",
    },
  },
  "user@example.com": {
    password: "user123",
    user: {
      id: "user-1",
      email: "user@example.com",
      name: "Demo User",
      role: "user",
      createdAt: "2024-06-15",
    },
  },
}

// Auth helper functions
export function getStoredAuth(): AuthState {
  if (typeof window === "undefined") {
    return { user: null, isAuthenticated: false }
  }
  const stored = localStorage.getItem("cocoa_auth")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return { user: null, isAuthenticated: false }
    }
  }
  return { user: null, isAuthenticated: false }
}

export function setStoredAuth(state: AuthState): void {
  if (typeof window === "undefined") return
  localStorage.setItem("cocoa_auth", JSON.stringify(state))
  // Dispatch custom event to notify components of auth change
  window.dispatchEvent(new Event("auth-change"))
}

export function clearStoredAuth(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("cocoa_auth")
  // Dispatch custom event to notify components of auth change
  window.dispatchEvent(new Event("auth-change"))
}

export function loginUser(email: string, password: string): { success: boolean; user?: User; error?: string } {
  const demoUser = DEMO_USERS[email.toLowerCase()]
  if (!demoUser) {
    return { success: false, error: "User not found" }
  }
  if (demoUser.password !== password) {
    return { success: false, error: "Invalid password" }
  }
  const authState: AuthState = { user: demoUser.user, isAuthenticated: true }
  setStoredAuth(authState)
  return { success: true, user: demoUser.user }
}

export function registerUser(
  email: string,
  password: string,
  name: string,
): { success: boolean; user?: User; error?: string } {
  // Check if user already exists
  if (DEMO_USERS[email.toLowerCase()]) {
    return { success: false, error: "Email already registered" }
  }

  // Create new user (in demo, just store in localStorage)
  const newUser: User = {
    id: `user-${Date.now()}`,
    email: email.toLowerCase(),
    name,
    role: "user",
    createdAt: new Date().toISOString(),
  }

  const authState: AuthState = { user: newUser, isAuthenticated: true }
  setStoredAuth(authState)
  return { success: true, user: newUser }
}

export function logoutUser(): void {
  clearStoredAuth()
}
