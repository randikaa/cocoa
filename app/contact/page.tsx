"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageSquare, Clock, Check } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center py-12 sm:py-20">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Have a question, feedback, or just want to say hi? We would love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <Mail className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-2">For general inquiries</p>
                <a href="mailto:hello@cocoa.style" className="text-sm text-primary hover:underline">
                  hello@cocoa.style
                </a>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <MessageSquare className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Social Media</h3>
                <p className="text-sm text-muted-foreground mb-2">DM us anytime</p>
                <div className="space-y-1">
                  <a href="#" className="text-sm text-primary hover:underline block">
                    @cocoa.style
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border p-6">
                <Clock className="h-6 w-6 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                <p className="text-sm text-muted-foreground">We typically respond within 24-48 hours</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thanks for reaching out. We will get back to you within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required className="bg-background border-border" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-foreground mb-2">
                        Topic
                      </label>
                      <Select>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          <SelectItem value="order">Order Issue</SelectItem>
                          <SelectItem value="return">Returns & Exchanges</SelectItem>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="collab">Collaboration Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="order" className="block text-sm font-medium text-foreground mb-2">
                        Order Number (if applicable)
                      </label>
                      <Input id="order" placeholder="#COCOA-XXXXX" className="bg-background border-border" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help?"
                        rows={5}
                        required
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground h-12">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
