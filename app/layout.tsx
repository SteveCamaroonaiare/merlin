import type React from "react"
import type { Metadata } from "next"
import { Lora, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "CEROS MKP - Centre de Recherche en Optimisation Stratégique",
  description:
    "Centre de Recherche d'Optimisation Stratégique en Ingénierie Décisionnelle Systémique. La Science de la décision, qui permet au pouvoir d'exister.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${lora.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
