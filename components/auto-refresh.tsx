"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

interface AutoRefreshProps {
  intervalMinutes?: number
}

export function AutoRefresh({ intervalMinutes = 10 }: AutoRefreshProps) {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(
      () => {
        console.log("[v0] Auto-refreshing weather data")
        router.refresh()
      },
      intervalMinutes * 60 * 1000,
    )

    return () => clearInterval(interval)
  }, [router, intervalMinutes])

  return null
}
