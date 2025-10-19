"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export function AutoLocation() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const hasLocationParams = searchParams.has("lat") || searchParams.has("lon") || searchParams.has("city")

    if (!hasLocationParams && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("[v0] Auto-detected location:", position.coords)
          router.push(`/?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        },
        (error) => {
          console.log("[v0] Geolocation not available, using default location")
        },
      )
    }
  }, [router, searchParams])

  return null
}
