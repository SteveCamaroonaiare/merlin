"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-17 h-17 relative">
            <Image
              src="/images/logo.png"
              alt="CEROS MKP "
              width={20}
              height={20}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link href="/analytics" className="text-sm font-medium hover:text-primary transition-colors">
              CEROS Analytics
            </Link>
            <Link href="/innovations" className="text-sm font-medium hover:text-primary transition-colors">
              CEROS Innovations
            </Link>
            <Link href="/governments" className="text-sm font-medium hover:text-primary transition-colors">
              CEROS Governments
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>

            <Button variant="outline" size="sm">
              English
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/analytics" className="text-sm font-medium hover:text-primary transition-colors">
                CEROS Analytics
              </Link>
              <Link href="/innovations" className="text-sm font-medium hover:text-primary transition-colors">
                CEROS Innovations
              </Link>
              <Link href="/governments" className="text-sm font-medium hover:text-primary transition-colors">
                CEROS Governments
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
              <Button variant="outline" size="sm" className="w-fit bg-transparent">
                English
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
