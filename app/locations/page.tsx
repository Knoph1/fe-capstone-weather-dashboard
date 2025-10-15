"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { SavedLocationCard } from "@/components/saved-location-card"
import { Button } from "@/components/ui/button"
import { getSavedLocations, removeLocation, clearAllLocations, type SavedLocation } from "@/lib/local-storage"
import { Trash2, MapPin } from "@/components/icons"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function LocationsPage() {
  const [locations, setLocations] = useState<SavedLocation[]>([])
  const router = useRouter()

  useEffect(() => {
    setLocations(getSavedLocations())
  }, [])

  const handleRemove = (id: string) => {
    removeLocation(id)
    setLocations(getSavedLocations())
  }

  const handleClearAll = () => {
    clearAllLocations()
    setLocations([])
  }

  const handleSelectLocation = (location: SavedLocation) => {
    // Navigate to home page with location data
    router.push(`/?lat=${location.lat}&lon=${location.lon}&name=${encodeURIComponent(location.name)}`)
  }

  return (
    <div className="container py-8 space-y-8">
      {/* Hero Section */}
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-balance lg:text-5xl">Saved Locations</h1>
          <p className="text-muted-foreground text-lg max-w-2xl text-pretty">
            Quick access to weather data for your frequently searched locations.
          </p>
        </div>

        {locations.length > 0 && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="bg-transparent">
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Clear all saved locations?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. All your saved locations will be permanently removed.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearAll}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Clear All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>

      {/* Locations Grid */}
      {locations.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <SavedLocationCard
              key={location.id}
              location={location}
              onRemove={handleRemove}
              onSelect={handleSelectLocation}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <MapPin className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No saved locations yet</h3>
          <p className="text-muted-foreground mb-6">
            Search for cities on the dashboard to automatically save them here for quick access.
          </p>
          <Button onClick={() => router.push("/")}>Go to Dashboard</Button>
        </div>
      )}
    </div>
  )
}
