"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/lib/data"
import { formatPrice } from "@/lib/currency"
import { Package, ShoppingCart, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react"

// Mock data for dashboard
const stats = [
  {
    title: "Total Revenue",
    value: formatPrice(1250000),
    change: "+12.5%",
    isPositive: true,
    icon: TrendingUp,
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.2%",
    isPositive: true,
    icon: ShoppingCart,
  },
  {
    title: "Products",
    value: products.length.toString(),
    change: "+2",
    isPositive: true,
    icon: Package,
  },
  {
    title: "Customers",
    value: "1,429",
    change: "+15.3%",
    isPositive: true,
    icon: Users,
  },
]

const recentOrders = [
  { id: "ORD-001", customer: "Alex K.", total: 12500, status: "completed", date: "2024-12-08" },
  { id: "ORD-002", customer: "Mia L.", total: 7800, status: "processing", date: "2024-12-08" },
  { id: "ORD-003", customer: "Jordan T.", total: 15200, status: "pending", date: "2024-12-07" },
  { id: "ORD-004", customer: "Sarah M.", total: 4500, status: "completed", date: "2024-12-07" },
  { id: "ORD-005", customer: "Chris N.", total: 9800, status: "shipped", date: "2024-12-06" },
]

const topProducts = products.slice(0, 5).map((p) => ({
  ...p,
  sales: Math.floor(Math.random() * 100) + 20,
  revenue: p.price * (Math.floor(Math.random() * 100) + 20),
}))

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to the admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.isPositive ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>{stat.change}</span>
                <span className="text-sm text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatPrice(order.total)}</p>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        order.status === "completed"
                          ? "bg-green-500/10 text-green-500"
                          : order.status === "processing"
                            ? "bg-blue-500/10 text-blue-500"
                            : order.status === "shipped"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div key={product.id} className="flex items-center gap-4 py-2 border-b border-border last:border-0">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-cover bg-background"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatPrice(product.revenue)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
