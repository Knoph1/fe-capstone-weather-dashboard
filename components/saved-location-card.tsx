"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Trash2, Loader2 } from "@/components/icons"
import type { SavedLocation } from "@/lib/local-storage"
import { getCurrentWeatherByCoords, formatTemp, getWeatherIconUrl, type WeatherData } from "@/lib/weather-api"
import Image from "next/image"

interface SavedLocationCardProps {
  location: SavedLocation
  onRemove: (id: string) => void
  onSelect: (location: SavedLocation) => void
}

export function SavedLocationCard({ location, onRemove, onSelect }: SavedLocationCardProps) {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadWeather = async () => {
    if (weatherData || isLoading) return

    setIsLoading(true)
    try {
      const data = await getCurrentWeatherByCoords(location.lat, location.lon)
      setWeatherData(data)
    } catch {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card
      className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-md"
      onMouseEnter={loadWeather}
      onClick={() => onSelect(location)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <CardTitle className="text-lg">
              {location.name}, {location.country}
            </CardTitle>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 -mt-1 -mr-2"
            onClick={(e) => {
              e.stopPropagation()
              onRemove(location.id)
            }}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
            <span className="sr-only">Remove location</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        )}

        {error && <p className="text-sm text-muted-foreground py-4">Unable to load weather data</p>}

        {weatherData && !isLoading && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={getWeatherIconUrl(weatherData.weather[0].icon) || "/placeholder.svg"}
                alt={weatherData.weather[0].description}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <div>
                <p className="text-2xl font-bold">{formatTemp(weatherData.main.temp)}</p>
                <p className="text-xs text-muted-foreground capitalize">{weatherData.weather[0].description}</p>
              </div>
            </div>
            <div className="text-right text-sm text-muted-foreground">
              <p>H: {formatTemp(weatherData.main.temp_max)}</p>
              <p>L: {formatTemp(weatherData.main.temp_min)}</p>
            </div>
          </div>
        )}

        {!weatherData && !isLoading && !error && (
          <p className="text-sm text-muted-foreground py-4">Hover to load weather</p>
        )}
      </CardContent>
    </Card>
  )
}
