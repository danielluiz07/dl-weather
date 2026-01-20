import { WeatherData } from "@/src/types/weather";

export async function getWeather(city: string): Promise<WeatherData | null> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!city || !apiKey) return null;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url, { 
      next: { revalidate: 120 } 
    });

    if (!response.ok) {
      throw new Error("Cidade não encontrada");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    return null;
  }
}