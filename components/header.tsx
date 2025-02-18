"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black bg-[#98FB98] backdrop-blur supports-[backdrop-filter]:bg-[#98FB98]/60">
      <div className="container flex h-14 max-w-screen-xl mx-auto px-4 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold sm:text-2xl" style={{ fontFamily: "Courier, monospace" }}>
            SparkCard
          </span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Button asChild variant="outline" className="border-2 border-black">
            <Link href="#cta">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-14 left-0 right-0 bg-[#98FB98] border-b border-black md:hidden">
            <nav className="container py-4 flex flex-col gap-4">
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 px-4"
                href="#how-it-works"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 px-4"
                href="#features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4 px-4"
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="px-4 pb-2">
                <Button asChild variant="outline" className="border-2 border-black w-full">
                  <Link href="#cta" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

