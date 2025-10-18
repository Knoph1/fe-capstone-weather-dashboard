"use client"

import { Cloud, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-xl group transition-colors hover:text-primary"
        >
          <Cloud className="h-6 w-6 text-primary logo-animate group-hover:logo-glow transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
          <span className="text-balance">Weather Dashboard</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105">
            Dashboard
          </Link>
          <Link
            href="/forecast"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
          >
            Forecast
          </Link>
          <Link
            href="/locations"
            className="text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105"
          >
            Saved Locations
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2 hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}
