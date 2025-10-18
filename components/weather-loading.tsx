import { Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WeatherLoading() {
  return (
    <Card>
      <CardContent className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading weather data...</p>
        </div>
      </CardContent>
    </Card>
  )
}
