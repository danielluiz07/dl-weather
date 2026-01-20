import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { getWeather } from "@/lib/weather";

interface HomeProps{
  searchParams: Promise<{city?: string}>
}

export default async function Home({searchParams}: HomeProps) {
  const {city} = await searchParams
  const cityName = city || "Picuí"

  const weatherData = await getWeather(cityName)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      <div className="w-full max-w-2xl text-center mb-10 text-white">
        <h1 className="text-4xl font-bold mb-2">DL Weather</h1>
        <p className="text-white/70">Previsão em tempo real com Next.js & TS</p>
      </div>

      <SearchBar />

      {weatherData ? (
        <WeatherCard 
          data={{
            city: weatherData.name,
            temp: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            wind: weatherData.wind.speed,
          }} 
        />
      ) : (
        <p className="text-white mt-4 italic">Cidade não encontrada. Tente novamente!</p>
      )}
    </main>
  );
}