"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ForecastData } from "@/lib/weather-api"
import { formatTemp, getWeatherIconUrl } from "@/lib/weather-api"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface HourlyForecastProps {
  data: ForecastData
}

export function HourlyForecast({ data }: HourlyForecastProps) {
  // Take the next 24 hours (8 data points, each 3 hours apart)
  const hourlyData = data.list.slice(0, 8)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">24-Hour Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-4 pb-4">
            {hourlyData.map((item) => {
              const time = new Date(item.dt * 1000)
              const timeStr = time.toLocaleTimeString("en-US", {
                hour: "numeric",
                hour12: true,
              })
              const isNow = Math.abs(time.getTime() - Date.now()) < 3 * 60 * 60 * 1000

              return (
                <div
                  key={item.dt}
                  className="flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-lg border border-border/50 bg-card/50"
                >
                  <p className="text-sm font-medium">{isNow ? "Now" : timeStr}</p>
                  <Image
                    src={getWeatherIconUrl(item.weather[0].icon) || "/placeholder.svg"}
                    alt={item.weather[0].description}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                  <p className="text-lg font-bold">{formatTemp(item.main.temp)}</p>
                  <p className="text-xs text-muted-foreground capitalize text-center">{item.weather[0].main}</p>
                  {item.pop > 0 && <p className="text-xs text-chart-1 font-medium">{Math.round(item.pop * 100)}%</p>}
                </div>
              )
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
