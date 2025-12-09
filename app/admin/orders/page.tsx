"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { formatPrice } from "@/lib/currency"
import { Search, MoreHorizontal, Eye, Truck, CheckCircle } from "lucide-react"

const orders = [
  {
    id: "ORD-001",
    customer: "Alex K.",
    email: "alex@example.com",
    total: 12500,
    items: 2,
    status: "completed",
    date: "2024-12-08",
  },
  {
    id: "ORD-002",
    customer: "Mia L.",
    email: "mia@example.com",
    total: 7800,
    items: 1,
    status: "processing",
    date: "2024-12-08",
  },
  {
    id: "ORD-003",
    customer: "Jordan T.",
    email: "jordan@example.com",
    total: 15200,
    items: 3,
    status: "pending",
    date: "2024-12-07",
  },
  {
    id: "ORD-004",
    customer: "Sarah M.",
    email: "sarah@example.com",
    total: 4500,
    items: 1,
    status: "completed",
    date: "2024-12-07",
  },
  {
    id: "ORD-005",
    customer: "Chris N.",
    email: "chris@example.com",
    total: 9800,
    items: 2,
    status: "shipped",
    date: "2024-12-06",
  },
  {
    id: "ORD-006",
    customer: "Emma W.",
    email: "emma@example.com",
    total: 6800,
    items: 1,
    status: "processing",
    date: "2024-12-06",
  },
  {
    id: "ORD-007",
    customer: "David L.",
    email: "david@example.com",
    total: 11200,
    items: 2,
    status: "shipped",
    date: "2024-12-05",
  },
  {
    id: "ORD-008",
    customer: "Lisa K.",
    email: "lisa@example.com",
    total: 4200,
    items: 1,
    status: "cancelled",
    date: "2024-12-05",
  },
]

const statusColors: Record<string, string> = {
  pending: "bg-yellow-500/10 text-yellow-500",
  processing: "bg-blue-500/10 text-blue-500",
  shipped: "bg-purple-500/10 text-purple-500",
  completed: "bg-green-500/10 text-green-500",
  cancelled: "bg-red-500/10 text-red-500",
}

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Orders</h1>
        <p className="text-muted-foreground">Manage customer orders</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40 bg-card border-border">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-sm text-muted-foreground self-center">{filteredOrders.length} orders</p>
      </div>

      {/* Orders Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Order</TableHead>
              <TableHead className="text-muted-foreground">Customer</TableHead>
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Items</TableHead>
              <TableHead className="text-muted-foreground">Total</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id} className="border-border">
                <TableCell className="font-medium text-foreground">{order.id}</TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium text-foreground">{order.customer}</p>
                    <p className="text-xs text-muted-foreground">{order.email}</p>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.date}</TableCell>
                <TableCell className="text-foreground">{order.items}</TableCell>
                <TableCell className="font-medium text-foreground">{formatPrice(order.total)}</TableCell>
                <TableCell>
                  <Badge className={`${statusColors[order.status]} hover:${statusColors[order.status]}`}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <DropdownMenuItem>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Truck className="h-4 w-4 mr-2" />
                        Mark as Shipped
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Mark as Completed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
