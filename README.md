# 🌦️ Weather Dashboard  
**ALX Front-End Capstone Project by Knoph O. Ayieko**

A professional and fully responsive **Weather Dashboard** built with **React (Vite)** and **Tailwind CSS**, delivering real-time weather updates and forecasts from the **OpenWeatherMap API**.  
This project demonstrates modern front-end development best practices — speed, interactivity, accessibility, and scalability.

---

## ✨ Features

- 🌍 **Real-Time Weather Data** — Live conditions: temperature, humidity, wind speed, pressure, and visibility.  
- 📅 **5-Day Forecast** — Detailed daily weather predictions with temperature ranges and icons.  
- 🕐 **24-Hour Forecast** — Hourly updates for short-term planning *(planned feature)*.  
- 📌 **Saved Locations** — Save and manage frequently viewed cities *(coming soon)*.  
- 🧭 **Geolocation Support** — Automatically detect and display current location weather *(planned)*.  
- 🌓 **Dark / Light Mode** — Seamless theme switching based on user or system preference.  
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.  
- ⚙️ **Fast Development** — Powered by **Vite** for instant hot module reloads.  
- 🔍 **SEO Optimized** — Clean metadata and accessible markup for better discoverability.

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
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Forecast.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Page-level components
│   │   ├── Home.jsx
│   │   └── About.jsx
│   ├── App.jsx              # Main application file
│   ├── main.jsx             # Entry point
│   └── index.css            # Tailwind base styles
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚙️ Setup & Installation

### 1. Prerequisites
- Node.js 18+ installed  
- An API key from [OpenWeatherMap](https://openweathermap.org/api)

### 2. Installation
```bash
# Clone this repository
git clone https://github.com/Knoph1/fe-capstone-weather-dashboard.git

# Navigate into the project
cd fe-capstone-weather-dashboard

# Install dependencies
npm install

# Add your OpenWeather API key in `src/lib/weather-api.js`
const API_KEY = "your-api-key-here"

# Run development server
npm run dev
```
Then open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🌡️ Features in Detail

### Current Weather
- Temperature (current, feels like, min/max)  
- Conditions with visual icons  
- Humidity, wind speed/direction, and atmospheric pressure  
- Sunrise and sunset times  

### Forecast
- 5-day daily overview with weather icons  
- Hourly forecast *(coming soon)*  
- Probability of precipitation and cloud coverage  

### Saved Locations *(Future Update)*
- Save and access frequently searched cities  
- Delete or update locations easily  
- Persistent storage via `localStorage`

### Theme Support
- Light, Dark, and System modes  
- Smooth transition animations  

---

## 🌐 API Integration

This project consumes the **OpenWeatherMap API** with the following endpoints:

| Purpose | Endpoint |
|----------|-----------|
| Current Weather | `/data/2.5/weather` |
| 5-Day Forecast | `/data/2.5/forecast` |
| Geocoding | `/geo/1.0/direct` |

API requests are efficiently handled and parsed for display-ready weather information.

---

## 🧭 SEO & Accessibility

- Optimized metadata on all pages  
- Semantic HTML5 structure  
- ARIA-labeled accessible components  
- Open Graph and Twitter Card metadata *(planned)*  
- Clean URLs and descriptive titles  

---

## 📈 Project Progress

- [x] Initialize project with React + Tailwind CSS  
- [x] Build weather dashboard UI  
- [x] Integrate real-time data fetch from OpenWeather API  
- [ ] Add 5-day forecast section  
- [ ] Add routing (Home, About, Saved)  
- [ ] Implement theme switching and geolocation  
- [ ] Optimize accessibility and performance  

---

## 📸 Screenshots
_Screenshots and GIF previews will be added once the final UI version is complete._

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it for personal or commercial purposes.

---

## 👤 Author

**Knoph O. Ayieko**  
💻 *Front-End Developer | Researcher | IT Specialist*  

- 🌐 Portfolio: [knoph.dev](https://knoph.dev)  
- 💼 LinkedIn: [Knoph Ayieko](https://linkedin.com/in/knoph-ayieko)  
- 🐙 GitHub: [@Knoph1](https://github.com/Knoph1)  
- ✉️ Email: [knopholuoch@gmail.com](mailto:knopholuoch@gmail.com)

---

### © 2025 | Weather Dashboard — ALX Africa Capstone Project  
*Crafted with code, creativity, and purpose by Knoph O. Ayieko.*
