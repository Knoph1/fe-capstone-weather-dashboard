"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { WeatherSearch } from "@/components/weather-search"
import { CurrentWeatherCard } from "@/components/current-weather-card"
import { WeatherError } from "@/components/weather-error"
import { WeatherLoading } from "@/components/weather-loading"
import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
  getForecast,
  getForecastByCoords,
  type WeatherData,
  type ForecastData,
} from "@/lib/weather-api"
import { saveLocation } from "@/lib/local-storage"
import { Button } from "@/components/ui/button"
import { MapPin } from "@/components/icons"
import { HourlyForecast } from "@/components/hourly-forecast"

export default function HomePage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [forecastData, setForecastData] = useState<ForecastData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const lat = searchParams.get("lat")
    const lon = searchParams.get("lon")

    if (lat && lon) {
      loadWeatherByCoords(Number.parseFloat(lat), Number.parseFloat(lon))
    }
  }, [searchParams])

  const loadWeatherByCoords = async (lat: number, lon: number) => {
    setIsLoading(true)
    setError(null)

    try {
      const [currentData, forecast] = await Promise.all([
        getCurrentWeatherByCoords(lat, lon),
        getForecastByCoords(lat, lon),
      ])

      setWeatherData(currentData)
      setForecastData(forecast)

      saveLocation({
        name: currentData.name,
        country: currentData.sys.country,
        lat: currentData.coord.lat,
        lon: currentData.coord.lon,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = async (city: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const [currentData, forecast] = await Promise.all([getCurrentWeather(city), getForecast(city)])

      setWeatherData(currentData)
      setForecastData(forecast)

      saveLocation({
        name: currentData.name,
        country: currentData.sys.country,
        lat: currentData.coord.lat,
        lon: currentData.coord.lon,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch weather data. Please try again.")
      setWeatherData(null)
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
        await loadWeatherByCoords(position.coords.latitude, position.coords.longitude)
        setIsGettingLocation(false)
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
        <h1 className="text-4xl font-bold text-balance lg:text-5xl">Real-Time Weather Dashboard</h1>
        <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
          Get accurate weather conditions, forecasts and detailed meteorological data for any location worldwide.
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

      {/* Weather Display */}
      {error && <WeatherError message={error} />}
      {isLoading && <WeatherLoading />}
      {weatherData && !isLoading && (
        <div className="space-y-8">
          <CurrentWeatherCard data={weatherData} />
          {forecastData && <HourlyForecast data={forecastData} />}
        </div>
      )}

      {/* Initial State */}
      {!weatherData && !isLoading && !error && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">Search for a city or use your current location to get started</p>
        </div>
      )}
    </div>
  )
}
