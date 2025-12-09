"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { categories } from "@/lib/data"
import { Plus, Search, Edit, Trash2, Image as ImageIcon } from "lucide-react"

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAddDialog, setShowAddDialog] = useState(false)

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categories</h1>
          <p className="text-muted-foreground mt-1">Manage product categories and collections</p>
        </div>
        <Button className="bg-primary text-primary-foreground" onClick={() => setShowAddDialog(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardDescription>Total Categories</CardDescription>
            <CardTitle className="text-3xl text-foreground">{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardDescription>Active Categories</CardDescription>
            <CardTitle className="text-3xl text-foreground">{categories.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardDescription>Total Products</CardDescription>
            <CardTitle className="text-3xl text-foreground">
              {categories.reduce((sum, cat) => sum + cat.productCount, 0)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="pb-3">
            <CardDescription>Avg Products/Category</CardDescription>
            <CardTitle className="text-3xl text-foreground">
              {Math.round(categories.reduce((sum, cat) => sum + cat.productCount, 0) / categories.length)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Search */}
      <Card className="bg-card border-border">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 bg-transparent focus-visible:ring-0 text-foreground"
            />
          </div>
        </CardHeader>
      </Card>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCategories.map((category) => (
          <Card key={category.id} className="bg-card border-border overflow-hidden group">
            <div className="relative aspect-video bg-muted">
              {category.image ? (
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <ImageIcon className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button size="sm" variant="secondary">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-foreground">{category.name}</CardTitle>
                  <CardDescription className="mt-1">{category.description}</CardDescription>
                </div>
                <Badge variant="secondary">{category.productCount}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Slug:</span>
                <code className="text-xs bg-muted px-2 py-1 rounded text-foreground">{category.slug}</code>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <Card className="bg-card border-border">
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No categories found matching your search.</p>
          </CardContent>
        </Card>
      )}

      {/* Add Category Dialog (Simple version) */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Add New Category</CardTitle>
              <CardDescription>Create a new product category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" placeholder="e.g., Anime" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="e.g., anime" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Category description" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input id="image" placeholder="https://..." className="bg-background border-border" />
              </div>
              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-primary text-primary-foreground">Create Category</Button>
                <Button variant="outline" className="flex-1" onClick={() => setShowAddDialog(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
