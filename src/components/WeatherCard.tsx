interface WeatherProps {
  data: {
    city: string;
    temp: number;
    description: string;
    humidity: number;
    wind: number;
  };
}

export default function WeatherCard({ data }: WeatherProps) {
  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl text-white shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">{data.city}</h2>
        <p className="text-lg text-white/70 capitalize">{data.description}</p>
      </div>

      <div className="flex justify-center items-center mb-8">
        <span className="text-7xl font-extrabold">
          {Math.round(data.temp)}°
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm">Umidade</span>
          <span className="text-xl font-semibold">{data.humidity}%</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm">Vento</span>
          <span className="text-xl font-semibold">{data.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
