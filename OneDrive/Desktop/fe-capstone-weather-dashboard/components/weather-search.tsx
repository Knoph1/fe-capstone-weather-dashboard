"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface WeatherSearchProps {
  onSearch: (city: string) => void
  isLoading?: boolean
}

export function WeatherSearch({ onSearch, isLoading }: WeatherSearchProps) {
  const [city, setCity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for a city... (e.g., London, New York, Tokyo)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="pl-10 hover:border-primary/50 focus:border-primary transition-all duration-200"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading || !city.trim()}
        className="hover:scale-105 transition-all duration-200"
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
    </form>
  )
}
