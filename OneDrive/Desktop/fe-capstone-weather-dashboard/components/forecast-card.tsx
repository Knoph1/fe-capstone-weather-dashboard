"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ForecastData } from "@/lib/weather-api"
import { formatTemp, getWeatherIconUrl } from "@/lib/weather-api"
import Image from "next/image"
import { Droplets, Wind } from "lucide-react"

interface ForecastCardProps {
  data: ForecastData
}

interface DailyForecast {
  date: string
  temp_min: number
  temp_max: number
  humidity: number
  wind_speed: number
  weather: {
    main: string
    description: string
    icon: string
  }
  pop: number
}

export function ForecastCard({ data }: ForecastCardProps) {
  // Group forecast data by day
  const dailyForecasts: DailyForecast[] = []
  const groupedByDay = new Map<string, typeof data.list>()

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    if (!groupedByDay.has(date)) {
      groupedByDay.set(date, [])
    }
    groupedByDay.get(date)?.push(item)
  })

  // Calculate daily averages and extremes
  groupedByDay.forEach((items, date) => {
    const temps = items.map((item) => item.main.temp)
    const temp_min = Math.min(...items.map((item) => item.main.temp_min))
    const temp_max = Math.max(...items.map((item) => item.main.temp_max))
    const humidity = Math.round(items.reduce((sum, item) => sum + item.main.humidity, 0) / items.length)
    const wind_speed = items.reduce((sum, item) => sum + item.wind.speed, 0) / items.length
    const pop = Math.max(...items.map((item) => item.pop))

    // Use the weather from the middle of the day (around noon)
    const noonItem =
      items.find((item) => {
        const hour = new Date(item.dt * 1000).getHours()
        return hour >= 11 && hour <= 14
      }) || items[Math.floor(items.length / 2)]

    dailyForecasts.push({
      date,
      temp_min,
      temp_max,
      humidity,
      wind_speed,
      weather: noonItem.weather[0],
      pop,
    })
  })

  // Take only the next 5 days
  const fiveDayForecast = dailyForecasts.slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-balance">5-Day Forecast</h2>
        <p className="text-sm text-muted-foreground">
          {data.city.name}, {data.city.country}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {fiveDayForecast.map((day, index) => {
          const date = new Date(day.date)
          const dayName = index === 0 ? "Today" : date.toLocaleDateString("en-US", { weekday: "short" })
          const dateStr = date.toLocaleDateString("en-US", { month: "short", day: "numeric" })

          return (
            <Card key={day.date} className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold">{dayName}</CardTitle>
                <p className="text-xs text-muted-foreground">{dateStr}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center">
                  <Image
                    src={getWeatherIconUrl(day.weather.icon, "2x") || "/placeholder.svg"}
                    alt={day.weather.description}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground capitalize mb-1">{day.weather.description}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold">{formatTemp(day.temp_max)}</span>
                    <span className="text-lg text-muted-foreground">{formatTemp(day.temp_min)}</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Droplets className="h-3 w-3" />
                      <span>Humidity</span>
                    </div>
                    <span className="font-medium">{day.humidity}%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Wind className="h-3 w-3" />
                      <span>Wind</span>
                    </div>
                    <span className="font-medium">{Math.round(day.wind_speed * 3.6)} km/h</span>
                  </div>

                  {day.pop > 0 && (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Droplets className="h-3 w-3" />
                        <span>Rain</span>
                      </div>
                      <span className="font-medium">{Math.round(day.pop * 100)}%</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
