import { NextResponse } from "next/server";
import axios from "axios";

const API_BASE = "https://api.openweathermap.org/data/2.5";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  try {
    const response = await axios.get(`${API_BASE}/weather`, {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric",
      },
    });

    const data = response.data;

    return NextResponse.json({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      wind_speed: data.wind.speed,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error:
          error.response?.data?.message || "Failed to fetch weather data.",
      },
      { status: error.response?.status || 500 }
    );
  }
}
