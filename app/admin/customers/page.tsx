"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { formatPrice } from "@/lib/currency"
import { Search, MoreHorizontal, Mail, Eye, UserX } from "lucide-react"

const customers = [
  {
    id: "1",
    name: "Alex K.",
    email: "alex@example.com",
    orders: 5,
    spent: 45000,
    joined: "2024-06-15",
    status: "active",
  },
  {
    id: "2",
    name: "Mia L.",
    email: "mia@example.com",
    orders: 3,
    spent: 28500,
    joined: "2024-07-20",
    status: "active",
  },
  {
    id: "3",
    name: "Jordan T.",
    email: "jordan@example.com",
    orders: 8,
    spent: 72000,
    joined: "2024-03-10",
    status: "vip",
  },
  {
    id: "4",
    name: "Sarah M.",
    email: "sarah@example.com",
    orders: 2,
    spent: 12000,
    joined: "2024-09-05",
    status: "active",
  },
  {
    id: "5",
    name: "Chris N.",
    email: "chris@example.com",
    orders: 4,
    spent: 35000,
    joined: "2024-05-22",
    status: "active",
  },
  { id: "6", name: "Emma W.", email: "emma@example.com", orders: 1, spent: 6800, joined: "2024-11-01", status: "new" },
  {
    id: "7",
    name: "David L.",
    email: "david@example.com",
    orders: 6,
    spent: 52000,
    joined: "2024-04-18",
    status: "vip",
  },
  {
    id: "8",
    name: "Lisa K.",
    email: "lisa@example.com",
    orders: 0,
    spent: 0,
    joined: "2024-11-20",
    status: "inactive",
  },
]

const statusColors: Record<string, string> = {
  active: "bg-green-500/10 text-green-500",
  vip: "bg-purple-500/10 text-purple-500",
  new: "bg-blue-500/10 text-blue-500",
  inactive: "bg-gray-500/10 text-gray-500",
}

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Customers</h1>
        <p className="text-muted-foreground">Manage your customer base</p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>
        <p className="text-sm text-muted-foreground">{filteredCustomers.length} customers</p>
      </div>

      {/* Customers Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Customer</TableHead>
              <TableHead className="text-muted-foreground">Orders</TableHead>
              <TableHead className="text-muted-foreground">Total Spent</TableHead>
              <TableHead className="text-muted-foreground">Joined</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-muted-foreground text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id} className="border-border">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                      {customer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{customer.name}</p>
                      <p className="text-xs text-muted-foreground">{customer.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-foreground">{customer.orders}</TableCell>
                <TableCell className="font-medium text-foreground">{formatPrice(customer.spent)}</TableCell>
                <TableCell className="text-muted-foreground">{customer.joined}</TableCell>
                <TableCell>
                  <Badge
                    className={`${statusColors[customer.status]} hover:${statusColors[customer.status]} capitalize`}
                  >
                    {customer.status}
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
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        <UserX className="h-4 w-4 mr-2" />
                        Deactivate
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
