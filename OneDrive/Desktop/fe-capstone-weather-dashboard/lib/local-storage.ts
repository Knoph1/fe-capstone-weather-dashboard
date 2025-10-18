// Local storage utilities for saved locations
export interface SavedLocation {
  id: string
  name: string
  country: string
  lat: number
  lon: number
  addedAt: number
}

const STORAGE_KEY = "weather-dashboard-locations"

export function getSavedLocations(): SavedLocation[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error("Error reading saved locations:", error)
    return []
  }
}

export function saveLocation(location: Omit<SavedLocation, "id" | "addedAt">): void {
  const locations = getSavedLocations()

  // Check if location already exists
  const exists = locations.some((loc) => loc.lat === location.lat && loc.lon === location.lon)

  if (exists) return

  const newLocation: SavedLocation = {
    ...location,
    id: `${location.lat}-${location.lon}-${Date.now()}`,
    addedAt: Date.now(),
  }

  locations.unshift(newLocation)

  // Keep only last 10 locations
  const trimmed = locations.slice(0, 10)

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
  } catch (error) {
    console.error("Error saving location:", error)
  }
}

export function removeLocation(id: string): void {
  const locations = getSavedLocations()
  const filtered = locations.filter((loc) => loc.id !== id)

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
  } catch (error) {
    console.error("Error removing location:", error)
  }
}

export function clearAllLocations(): void {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error("Error clearing locations:", error)
  }
}
