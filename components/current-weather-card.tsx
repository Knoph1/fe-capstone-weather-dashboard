"use client"

import { Cloud, Droplets, Eye, Gauge, MapPin, Sunrise, Sunset, Thermometer, Wind } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { WeatherData } from "@/lib/weather-api"
import { formatTemp, formatWindSpeed, getWeatherIconUrl, getWindDirection } from "@/lib/weather-api"
import Image from "next/image"

interface CurrentWeatherCardProps {
  data: WeatherData
}

export function CurrentWeatherCard({ data }: CurrentWeatherCardProps) {
  const weather = data.weather[0]
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <div className="space-y-6">
      {/* Main Weather Card */}
      <Card className="overflow-hidden hover-lift">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-3xl font-bold text-balance flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                {data.name}, {data.sys.country}
              </CardTitle>
              <p className="text-muted-foreground mt-1 capitalize">{weather.description}</p>
            </div>
            <div className="flex items-center">
              <Image
                src={getWeatherIconUrl(weather.icon, "4x") || "/placeholder.svg"}
                alt={weather.description}
                width={100}
                height={100}
                className="w-24 h-24"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl font-bold">{formatTemp(data.main.temp)}</span>
            <span className="text-2xl text-muted-foreground">Feels like {formatTemp(data.main.feels_like)}</span>
          </div>
          <div className="mt-4 flex gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Thermometer className="h-4 w-4 text-destructive" />
              <span>H: {formatTemp(data.main.temp_max)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Thermometer className="h-4 w-4 text-chart-1" />
              <span>L: {formatTemp(data.main.temp_min)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weather Details Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Humidity</CardTitle>
            <Droplets className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.main.humidity}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.main.humidity > 70 ? "High humidity" : data.main.humidity > 40 ? "Moderate" : "Low humidity"}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatWindSpeed(data.wind.speed)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Direction: {getWindDirection(data.wind.deg)} ({data.wind.deg}°)
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pressure</CardTitle>
            <Gauge className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.main.pressure} hPa</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.main.pressure > 1013 ? "High pressure" : "Low pressure"}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visibility</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{(data.visibility / 1000).toFixed(1)} km</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.visibility >= 10000 ? "Excellent" : data.visibility >= 5000 ? "Good" : "Poor"}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cloudiness</CardTitle>
            <Cloud className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.clouds.all}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {data.clouds.all > 75
                ? "Overcast"
                : data.clouds.all > 50
                  ? "Mostly cloudy"
                  : data.clouds.all > 25
                    ? "Partly cloudy"
                    : "Clear"}
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift hover:border-primary/50 transition-all duration-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sun Times</CardTitle>
            <Sunrise className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <Sunrise className="h-3 w-3" />
                <span className="font-medium">{sunrise}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Sunset className="h-3 w-3" />
                <span className="font-medium">{sunset}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
