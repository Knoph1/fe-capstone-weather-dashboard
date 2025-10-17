import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Weather Forecast | 5-Day & Hourly Predictions - Weather Dashboard",
  description:
    "View detailed 5-day weather forecasts and hourly predictions for any city worldwide. Get accurate temperature forecasts, precipitation probability, wind speed, and humidity levels.",
  keywords:
    "weather forecast, 5-day forecast, hourly forecast, weather prediction, temperature forecast, precipitation, weather outlook",
  openGraph: {
    title: "Weather Forecast | 5-Day & Hourly Predictions",
    description: "Detailed 5-day weather forecasts and hourly predictions for any location worldwide.",
    url: "https://weather-dashboard.vercel.app/forecast",
  },
}

export default function ForecastLayout({ children }: { children: React.ReactNode }) {
  return children
}
