"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  Download,
} from "lucide-react"

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "Rs. 2,450,000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Total Orders",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingCart,
    },
    {
      title: "Total Customers",
      value: "856",
      change: "+15.3%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Products Sold",
      value: "3,456",
      change: "-2.4%",
      trend: "down",
      icon: Package,
    },
  ]

  const topProducts = [
    { name: "Neon Dreams Oversized Tee", sales: 234, revenue: "Rs. 351,000" },
    { name: "Cyberpunk Hoodie", sales: 189, revenue: "Rs. 283,500" },
    { name: "Anime Legends Collection", sales: 156, revenue: "Rs. 234,000" },
    { name: "K-Pop Vibes Tee", sales: 142, revenue: "Rs. 213,000" },
    { name: "Gaming Elite Hoodie", sales: 128, revenue: "Rs. 192,000" },
  ]

  const recentOrders = [
    { id: "#ORD-1234", customer: "John Doe", amount: "Rs. 4,500", status: "Completed" },
    { id: "#ORD-1233", customer: "Jane Smith", amount: "Rs. 6,750", status: "Processing" },
    { id: "#ORD-1232", customer: "Mike Johnson", amount: "Rs. 3,200", status: "Shipped" },
    { id: "#ORD-1231", customer: "Sarah Williams", amount: "Rs. 5,400", status: "Completed" },
    { id: "#ORD-1230", customer: "Tom Brown", amount: "Rs. 2,800", status: "Pending" },
  ]

  const categoryPerformance = [
    { name: "Anime", sales: 456, revenue: "Rs. 684,000", growth: "+18%" },
    { name: "K-Pop", sales: 389, revenue: "Rs. 583,500", growth: "+12%" },
    { name: "Gaming", sales: 312, revenue: "Rs. 468,000", growth: "+8%" },
    { name: "Streetwear", sales: 267, revenue: "Rs. 400,500", growth: "+15%" },
    { name: "Limited Edition", sales: 198, revenue: "Rs. 297,000", growth: "+22%" },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your store performance and insights</p>
        </div>
        <Button variant="outline" className="bg-transparent border-border">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardDescription>{stat.title}</CardDescription>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span className={`text-sm ${stat.trend === "up" ? "text-green-500" : "text-red-500"}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Top Products</CardTitle>
            <CardDescription>Best selling products this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                  </div>
                  <div className="text-sm font-medium text-foreground">{product.revenue}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Category Performance */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Category Performance</CardTitle>
            <CardDescription>Sales by category this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryPerformance.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{category.sales} sales</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.growth}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${(category.sales / 500) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground min-w-[100px] text-right">
                      {category.revenue}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Orders</CardTitle>
          <CardDescription>Latest orders from your store</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{order.customer}</td>
                    <td className="py-3 px-4 text-sm text-foreground">{order.amount}</td>
                    <td className="py-3 px-4">
                      <Badge
                        variant={
                          order.status === "Completed"
                            ? "default"
                            : order.status === "Processing"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {order.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
