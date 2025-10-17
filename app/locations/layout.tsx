import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Saved Locations | Quick Weather Access - Weather Dashboard",
  description:
    "Access weather data for your saved locations. Manage and view current weather conditions for your frequently searched cities with one click.",
  keywords: "saved locations, favorite cities, weather bookmarks, quick weather access, location management",
  openGraph: {
    title: "Saved Locations | Quick Weather Access",
    description: "Quick access to weather data for your frequently searched locations.",
    url: "https://weather-dashboard.vercel.app/locations",
  },
}

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
