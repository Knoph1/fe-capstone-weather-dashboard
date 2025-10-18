"use client"

import { useState } from "react"
import { CurrentWeatherCard } from "@/components/current-weather-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Search } from "lucide-react"

export default function WeatherPage() {
  const [city, setCity] = useState("Nairobi")
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/forecast?city=${encodeURIComponent(city)}`)
      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || "Unable to fetch weather data.")
      }

      setData(result)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name (e.g. Nairobi)"
          className="max-w-xs"
        />
        <Button onClick={fetchWeather} disabled={loading}>
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Search className="mr-2 h-4 w-4" />}
          Get Forecast
        </Button>
      </div>

      {error && (
        <div className="text-red-500 text-center text-sm font-medium">
          {error}
        </div>
      )}

      {data ? (
        <CurrentWeatherCard
          data={{
            weather: [{ description: data.description, icon: data.icon }],
            name: data.city,
            sys: { country: data.country, sunrise: Date.now() / 1000, sunset: Date.now() / 1000 },
            main: {
              temp: data.temperature,
              feels_like: data.feels_like,
              temp_max: data.temperature + 2,
              temp_min: data.temperature - 2,
              humidity: data.humidity,
              pressure: data.pressure,
            },
            wind: { speed: data.wind_speed, deg: 90 },
            visibility: 8000,
            clouds: { all: 40 },
          }}
        />
      ) : (
        !loading && (
          <p className="text-center text-muted-foreground">
            Search for a city to view its current weather.
          </p>
        )
      )}
    </section>
  )
}
