import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  // Dados mockados apenas para você visualizar a UI agora
  const mockData = {
    city: "João Pessoa",
    temp: 28,
    description: "céu limpo",
    humidity: 74,
    wind: 12,
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      <div className="w-full max-w-2xl text-center mb-10 text-white">
        <h1 className="text-4xl font-bold mb-2">DL Weather</h1>
        <p className="text-white/70">Previsão do tempo em tempo real</p>
      </div>

      <SearchBar />
      <WeatherCard data={mockData} />
    </main>
  );
}