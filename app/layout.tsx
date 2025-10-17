import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { HelpChatbot } from "@/components/help-chatbot"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Weather Dashboard | Real-Time Weather Data Worldwide",
  description:
    "Professional weather dashboard providing real-time weather conditions, 5-day forecasts, and location-based weather data for any city worldwide. Features include current temperature, humidity, wind speed, and detailed weather forecasts.",
  keywords:
    "weather, weather dashboard, weather forecast, real-time weather, weather app, temperature, humidity, wind speed, weather conditions, OpenWeatherMap",
  authors: [{ name: "Weather Dashboard" }],
  creator: "Weather Dashboard",
  publisher: "Weather Dashboard",
  metadataBase: new URL("https://weather-dashboard.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Weather Dashboard | Real-Time Weather Data Worldwide",
    description: "Professional weather dashboard with real-time conditions and forecasts for any location worldwide.",
    url: "https://weather-dashboard.vercel.app",
    siteName: "Weather Dashboard",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weather Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weather Dashboard | Real-Time Weather Data Worldwide",
    description: "Professional weather dashboard with real-time conditions and forecasts.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="dark" storageKey="weather-dashboard-theme">
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
          <HelpChatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
