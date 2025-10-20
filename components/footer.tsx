import { Cloud, Github, Linkedin, Instagram, Facebook, TwitterX } from "@/components/icons"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold text-lg group transition-colors hover:text-primary"
            >
              <Cloud className="h-5 w-5 text-primary logo-animate group-hover:logo-glow transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
              <span>Weather Dashboard</span>
            </Link>
            <p className="text-sm text-muted-foreground text-pretty">
              Real-time weather data and forecasts for any location worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/forecast"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Forecast
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                >
                  Saved Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://openweathermap.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                >
                  OpenWeatherMap API
                </a>
              </li>
              <li>
                <a
                  href="https://openweathermap.org/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-200 inline-block hover:translate-x-1"
                >
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">About</h3>
            <p className="text-sm text-muted-foreground text-pretty">
              Weather data provided by OpenWeatherMap. Initially built in <strong>React.js</strong> then shifted to <strong>Next.js</strong> and deployed on Vercel.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Weather Dashboard. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/80 text-center sm:text-left">
              Developed by{" "}
              <a
                href="https://www.knoph.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:text-primary/80 hover:underline transition-colors duration-200"
              >
                Knoph O. Ayieko
              </a>{" "}
              courtesy of{" "}
              <a
                href="https://www.alxafrica.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium hover:text-accent/80 hover:underline transition-colors duration-200"
              >
                ALX Africa Front-End Web Development
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Knoph1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/knoph-ayieko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#0A66C2] transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/knoph_ayieko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#E4405F] transition-all duration-200 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/knoph.ayieko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#1877F2] transition-all duration-200 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/knoph_ayieko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
              aria-label="X (formerly Twitter)"
            >
              <TwitterX className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
