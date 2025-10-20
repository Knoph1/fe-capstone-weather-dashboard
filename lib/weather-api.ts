// ✅ Load API key from environment
// Use NEXT_PUBLIC_ prefix if you intend to call this directly from client-side code.
// Otherwise, keep it private (no prefix) and call through your /api route.
const API_KEY = "a22ea7df422ff7960253558fafd0802d"
// const API_KEY = process.env.OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;

// OpenWeatherMap API configuration and utilities
const BASE_URL = "https://api.openweathermap.org/data/2.5"
const GEO_URL = "https://api.openweathermap.org/geo/1.0"

export interface WeatherData {
  coord: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level?: number
    grnd_level?: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type?: number
    id?: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export interface ForecastData {
  cod: string
  message: number
  cnt: number
  list: Array<{
    dt: number
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      sea_level: number
      grnd_level: number
      humidity: number
      temp_kf: number
    }
    weather: Array<{
      id: number
      main: string
      description: string
      icon: string
    }>
    clouds: {
      all: number
    }
    wind: {
      speed: number
      deg: number
      gust: number
    }
    visibility: number
    pop: number
    sys: {
      pod: string
    }
    dt_txt: string
  }>
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface GeocodingResult {
  name: string
  local_names?: Record<string, string>
  lat: number
  lon: number
  country: string
  state?: string
}

// Fetch current weather by city name
export async function getCurrentWeather(city: string): Promise<WeatherData> {
  const response = await fetch(`${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)

  if (!response.ok) {
    throw new Error("City not found or API error")
  }

  return response.json()
}

// Fetch current weather by coordinates
export async function getCurrentWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
  const response = await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)

  if (!response.ok) {
    throw new Error("Unable to fetch weather data")
  }

  return response.json()
}

// Fetch 5-day forecast by city name
export async function getForecast(city: string): Promise<ForecastData> {
  const response = await fetch(`${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`)

  if (!response.ok) {
    throw new Error("City not found or API error")
  }

  return response.json()
}

// Fetch 5-day forecast by coordinates
export async function getForecastByCoords(lat: number, lon: number): Promise<ForecastData> {
  const response = await fetch(`${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)

  if (!response.ok) {
    throw new Error("Unable to fetch forecast data")
  }

  return response.json()
}

// Geocoding: Get coordinates from city name
export async function geocodeCity(city: string): Promise<GeocodingResult[]> {
  const response = await fetch(`${GEO_URL}/direct?q=${encodeURIComponent(city)}&limit=5&appid=${API_KEY}`)

  if (!response.ok) {
    throw new Error("Geocoding failed")
  }

  return response.json()
}

// Get weather icon URL
export function getWeatherIconUrl(iconCode: string, size: "2x" | "4x" = "2x"): string {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`
}

// Format temperature
export function formatTemp(temp: number, unit: "C" | "F" = "C"): string {
  if (unit === "F") {
    return `${Math.round((temp * 9) / 5 + 32)}°F`
  }
  return `${Math.round(temp)}°C`
}

// Format wind speed
export function formatWindSpeed(speed: number, unit: "metric" | "imperial" = "metric"): string {
  if (unit === "imperial") {
    return `${Math.round(speed * 2.237)} mph`
  }
  return `${Math.round(speed * 3.6)} km/h`
}

// Get wind direction from degrees
export function getWindDirection(deg: number): string {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ]
  const index = Math.round(deg / 22.5) % 16
  return directions[index]
}
