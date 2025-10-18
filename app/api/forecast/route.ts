import { NextResponse } from "next/server";

const API_KEY = "a22ea7df422ff7960253558fafd0802d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function GET(request: Request) {
  try {
    // Extract the city from the query string
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    // Validate query
    if (!city) {
      return NextResponse.json(
        { error: "City parameter is required. Example: ?city=Nairobi" },
        { status: 400 }
      );
    }

    // Build API URL
    const url = `${BASE_URL}?q=${encodeURIComponent(
      city
    )}&appid=${API_KEY}&units=metric`;

    // Fetch data from OpenWeather
    const res = await fetch(url);

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch weather data. Check city name." },
        { status: res.status }
      );
    }

    const data = await res.json();

    // Format the response
    const weatherResponse = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      timestamp: new Date().toISOString(),
    };

    return NextResponse.json(weatherResponse, { status: 200 });
  } catch (error) {
    console.error("Error fetching weather:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}
