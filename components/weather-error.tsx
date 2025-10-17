import { AlertCircle } from "@/components/icons"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface WeatherErrorProps {
  message: string
}

export function WeatherError({ message }: WeatherErrorProps) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
