import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Undangan Pernikahan Eva & Anang",
  description: "Undangan pernikahan digital untuk Eva & Anang - 28 Agustus 2025",
  keywords: "undangan pernikahan, wedding invitation, Eva, Anang",
  authors: [{ name: "Wedding Team" }],
  openGraph: {
    title: "Undangan Pernikahan Eva & Anang",
    description: "Dengan penuh sukacita, kami mengundang Anda untuk merayakan hari bahagia kami",
    type: "website",
  },
  generator: 'zanwebsite'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
