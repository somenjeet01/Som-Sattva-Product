import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Som Sattva - Premium Organic Honey",
  description:
    "Premium organic honey from Som Sattva. Pure, natural, and wellness-focused honey varieties for your health.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/trace.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/trace.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/trace.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/trace.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
