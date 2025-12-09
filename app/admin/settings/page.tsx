"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Save, Store, CreditCard, Truck, Bell, Shield, Mail, Globe } from "lucide-react"

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("Cocoa Streetwear")
  const [storeEmail, setStoreEmail] = useState("hello@cocoa.lk")
  const [currency, setCurrency] = useState("LKR")
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [orderNotifications, setOrderNotifications] = useState(true)
  const [maintenanceMode, setMaintenanceMode] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your store settings and preferences</p>
        </div>
        <Button className="bg-primary text-primary-foreground">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-card border border-border">
          <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Store className="h-4 w-4 mr-2" />
            General
          </TabsTrigger>
          <TabsTrigger value="payment" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="shipping" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Truck className="h-4 w-4 mr-2" />
            Shipping
          </TabsTrigger>
          <TabsTrigger value="notifications" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Store Information</CardTitle>
              <CardDescription>Basic information about your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input
                    id="storeName"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeEmail">Store Email</Label>
                  <Input
                    id="storeEmail"
                    type="email"
                    value={storeEmail}
                    onChange={(e) => setStoreEmail(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeAddress">Store Address</Label>
                <Input
                  id="storeAddress"
                  placeholder="123 Main St, Colombo, Sri Lanka"
                  className="bg-background border-border"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+94 77 123 4567" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Input
                    id="currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-background border-border"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Store Status</CardTitle>
              <CardDescription>Control your store availability</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Temporarily disable your store</p>
                </div>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payment" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Payment Methods</CardTitle>
              <CardDescription>Configure payment options for your store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Credit/Debit Cards</p>
                    <p className="text-sm text-muted-foreground">Accept Visa, Mastercard, Amex</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">PayPal</p>
                    <p className="text-sm text-muted-foreground">Accept PayPal payments</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Cash on Delivery</p>
                    <p className="text-sm text-muted-foreground">Accept cash payments on delivery</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Payment Gateway</CardTitle>
              <CardDescription>Configure your payment gateway credentials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input id="apiKey" type="password" placeholder="••••••••••••••••" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key</Label>
                <Input id="secretKey" type="password" placeholder="••••••••••••••••" className="bg-background border-border" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Shipping Settings */}
        <TabsContent value="shipping" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Shipping Zones</CardTitle>
              <CardDescription>Configure shipping rates for different regions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Colombo & Suburbs</p>
                    <p className="text-sm text-muted-foreground">Free shipping over Rs. 5,000</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">Rs. 500</p>
                    <p className="text-xs text-muted-foreground">Standard rate</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Other Cities</p>
                    <p className="text-sm text-muted-foreground">Free shipping over Rs. 7,500</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">Rs. 750</p>
                    <p className="text-xs text-muted-foreground">Standard rate</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">Remote Areas</p>
                    <p className="text-sm text-muted-foreground">Free shipping over Rs. 10,000</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">Rs. 1,200</p>
                    <p className="text-xs text-muted-foreground">Standard rate</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full bg-transparent border-border">
                Add Shipping Zone
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Delivery Time</CardTitle>
              <CardDescription>Estimated delivery timeframes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="standardDelivery">Standard Delivery</Label>
                  <Input id="standardDelivery" placeholder="5-7 business days" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="expressDelivery">Express Delivery</Label>
                  <Input id="expressDelivery" placeholder="2-3 business days" className="bg-background border-border" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-4">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Email Notifications</CardTitle>
              <CardDescription>Manage email notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Order Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive emails for new orders</p>
                </div>
                <Switch checked={orderNotifications} onCheckedChange={setOrderNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Customer Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive emails for new customer signups</p>
                </div>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Low Stock Alerts</Label>
                  <p className="text-sm text-muted-foreground">Get notified when products are low in stock</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Updates</Label>
                  <p className="text-sm text-muted-foreground">Receive marketing and promotional updates</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Security</CardTitle>
              <CardDescription>Security and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                  </div>
                </div>
                <Switch />
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full bg-transparent border-border">
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}