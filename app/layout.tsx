import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "cocoa | Pop Culture Apparel",
  description:
    "Express your fandom with anime, K-pop, and gaming inspired streetwear. Oversized tees, hoodies, and more for the culture.",
  generator: "v0.app",
  keywords: ["anime t-shirts", "k-pop merch", "gaming tees", "oversized streetwear", "pop culture fashion"],
  icons: {
    icon: "/icon.svg",
  },
}

export const viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
