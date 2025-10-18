"use client"

import { useState } from "react"
import { WeatherSearch } from "@/components/weather-search"
import { ForecastCard } from "@/components/forecast-card"
import { HourlyForecast } from "@/components/hourly-forecast"
import { WeatherError } from "@/components/weather-error"
import { WeatherLoading } from "@/components/weather-loading"
import { getForecast, getForecastByCoords, type ForecastData } from "@/lib/weather-api"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function ForecastPage() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  const handleSearch = async (city: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await getForecast(city)
      setForecastData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch forecast data. Please try again.")
      setForecastData(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser")
      return
    }

    setIsGettingLocation(true)
    setError(null)

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const data = await getForecastByCoords(position.coords.latitude, position.coords.longitude)
          setForecastData(data)
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to fetch forecast data for your location.")
        } finally {
          setIsGettingLocation(false)
        }
      },
      (err) => {
        setError(`Unable to get your location: ${err.message}`)
        setIsGettingLocation(false)
      },
    )
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-balance lg:text-5xl">Weather Forecast</h1>
        <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
          View detailed 5-day weather forecasts and hourly predictions for any location.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <WeatherSearch onSearch={handleSearch} isLoading={isLoading} />
        <Button
          variant="outline"
          onClick={handleGetCurrentLocation}
          disabled={isGettingLocation}
          className="whitespace-nowrap bg-transparent"
        >
          <MapPin className="h-4 w-4 mr-2" />
          {isGettingLocation ? "Getting location..." : "Use My Location"}
        </Button>
      </div>

      {/* Forecast Display */}
      {error && <WeatherError message={error} />}
      {isLoading && <WeatherLoading />}
      {forecastData && !isLoading && (
        <div className="space-y-8">
          <HourlyForecast data={forecastData} />
          <ForecastCard data={forecastData} />
        </div>
      )}

      {/* Initial State */}
      {!forecastData && !isLoading && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            Search for a city or use your current location to view the forecast
          </p>
        </div>
      )}
    </div>
  )
}
