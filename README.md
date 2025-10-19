# 🌦️ Weather Dashboard  
---

# fe-capstone-weather-dashboard  
**ALX Front-End Capstone Project**

A professional, fully responsive **Weather Dashboard** built with **React (Vite)** and **Tailwind CSS**, delivering real-time weather updates and forecasts using the **OpenWeatherMap API**.  
This project demonstrates modern front-end development best practices — speed, interactivity, accessibility and scalability.

[![Vercel](https://img.shields.io/badge/Deployed-Vercel-blue)](https://fe-capstone-weather.vercel.app/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 🌤️ Overview

The **Weather Dashboard** allows users to check live weather conditions and forecasts for any location worldwide. It is designed with a focus on performance, UX and maintainability.

- Real-time temperature, humidity, wind, pressure and visibility.
- Daily and hourly forecasts (planned).
- Dark/Light theme toggle with smooth transitions.
- Geolocation support (planned).
- Responsive and accessible across devices.

---

## 🚀 Live Demo

Check out the live application here: [Weather Dashboard on Vercel](https://fe-capstone-weather.vercel.app/)

---

## ✨ Features

- 🌍 **Current Weather:** Temperature, feels like, min/max, conditions with icons, humidity, wind, pressure, sunrise/sunset times.
- 📅 **5-Day Forecast:** Daily overview with icons, temperature ranges and weather predictions.
- 🕐 **24-Hour Forecast:** Hourly weather updates (planned).
- 📌 **Saved Locations:** Store frequently searched cities (planned).
- 🌓 **Dark/Light Mode:** Seamless theme switching based on user or system preference.
- 📱 **Responsive Design:** Optimized for desktop, tablet and mobile.
- ⚡ **Fast Development:** Powered by **Vite** for instant hot reloads.
- 🔍 **SEO & Accessibility:** Clean metadata, semantic HTML, ARIA attributes, descriptive URLs.

---

## 🛠️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Framework** | React (Vite) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS |
| **API** | OpenWeatherMap |
| **Routing** | React Router DOM *(planned)* |
| **Deployment** | Vercel / Netlify |
| **Version Control** | Git + GitHub |

---

## 📂 Project Structure
```bash
fe-capstone-weather-dashboard/
├── .dist/                  # Build output / compiled production-ready files
├── .vscode/                # VS Code workspace & editor settings
│   └── settings.json
├── app/                    # Application routes/pages (Next.js App Router)
│   ├── forecast/           # Forecast feature (layout + page)
│   ├── locations/          # Locations feature (layout + page)
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   ├── loading.tsx         # App-level loading screen
│   └── page.tsx            # Home page
├── components/             # Reusable components
│   └── ui/                 # UI building blocks (buttons, modals, cards, etc.)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       ├── table.tsx
│       └── ...other UI components
├── hooks/                  # Custom React hooks (e.g., useWeather, useFetch)
│   └── ...
├── lib/                    # Utility functions, API logic and helpers
│   ├── api.ts
│   └── ...
├── public/                 # Static assets (images, icons, fonts)
│   ├── favicon.ico
│   └── ...
├── styles/                 # Global or modular stylesheets
│   ├── variables.css
│   └── ...
├── .env.local              # Local environment variables (API keys, secrets)
├── .gitignore              # Git ignore rules
├── .postcssrc              # PostCSS configuration (alternative format)
├── components.json         # ShadCN/UI or component metadata
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template (if used by Vite)
├── LICENSE                 # License file (MIT)
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies, scripts and metadata
├── pnpm-lock.yaml          # Package lock file for pnpm
├── pnpm-workspace.yaml     # pnpm workspace setup
├── postcss.config.mjs      # PostCSS configuration (Tailwind, Autoprefixer)
├── README.md               # Project documentation
├── SECURITY.md             # Security policy
├── tailwind.config.js      # TailwindCSS configuration (themes, plugins)
├── tsconfig.json           # TypeScript compiler configuration
├── vercel-ignore.txt       # Files ignored during Vercel deployment
├── vercel.json             # Vercel deployment configuration
└── vite.config.js          # Vite bundler configuration (if integrated)
```

---  
## ⚙️ Setup & Installation

### Prerequisites
- Node.js 18+ installed  
- API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation
```bash
# Clone repository
git clone https://github.com/Knoph1/fe-capstone-weather-dashboard.git
cd fe-capstone-weather-dashboard

# Install dependencies
npm install

# Add OpenWeatherMap API key in src/lib/weather.ts
const API_KEY = "your_api_key_here"

# Run development server
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌡️ Detailed Features

### Current Weather
- Temperature, feels like, min/max
- Humidity, wind speed/direction, pressure
- Sunrise and sunset times
- Weather conditions with icons

### Forecast
- 5-day daily overview
- Hourly updates *(planned)*
- Probability of precipitation and cloud coverage

### Saved Locations *(Future Update)*
- Store frequently searched cities
- Persistent storage using `localStorage`
- Delete or update saved cities

### Theme Support
- Light, Dark and System modes
- Smooth animations and transitions

---

## 🌐 API Integration

| Purpose | Endpoint |
|---------|----------|
| Current Weather | `/data/2.5/weather` |
| 5-Day Forecast | `/data/2.5/forecast` |
| Geocoding | `/geo/1.0/direct` |

API responses are parsed and displayed in a user-friendly format.

---

## 📈 Project Progress

- [x] Project initialization with React + Tailwind CSS
- [x] Dashboard UI design
- [x] Integrate OpenWeatherMap API for current weather
- [ ] 5-day forecast implementation
- [x] Routing (Home, About, Saved locations)
- [ ] Geolocation & theme switching
- [x] Performance & accessibility optimization

---

## 📸 Screenshots

_The following screenshots showcase the Weather Dashboard interface across devices and themes — highlighting responsive design, light/dark modes and major feature pages._

| Desktop View | Mobile View |
|---------------|--------------|
| ![Desktop Light Mode - Dashboard Page](./public/screenshots/desktop-light%201.1.png) | ![Mobile Light Mode - Dashboard Page](./public/screenshots/mobile-light%201.1.png) |
| ![Desktop Dark Mode - Dashboard Page](./public/screenshots/desktop-dark%201.1.png) | ![Mobile Dark Mode - Dashboard Page](./public/screenshots/mobile-dark%201.1.png) |
| ![Desktop Light Mode - Forecast Page](./public/screenshots/desktop-forecast%202.png) | ![Mobile Light Mode - Forecast Page](./public/screenshots/mobile-forecast%202.png) |
| ![Desktop Light Mode - Saved Location Page](./public/screenshots/desktop-saved%203.png) | ![Mobile Light Mode - Saved Location Page](./public/screenshots/mobile-saved%203.png) |

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👤 Author

**Knoph O. Ayieko**  
💻 Front-End Web Developer | IT Specialist | Researcher

- 🌐 Portfolio: [knoph.dev](https://www.knoph.dev)  
- 💼 LinkedIn: [Knoph Ayieko](https://linkedin.com/in/knoph-ayieko)  
- 🐙 GitHub: [Knoph1](https://github.com/Knoph1)  
- ✉️ Email: [knophayieko@gmail.com](mailto:knophayieko@gmail.com)

---

### © 2025 | Weather Dashboard — ALX Africa Capstone Project  
*Crafted with code, creativity and purpose.*
