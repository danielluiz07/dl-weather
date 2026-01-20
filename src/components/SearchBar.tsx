"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBar() {

  const [city, setCity] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent)=>{
    e.preventDefault()
    if(!city) return
    router.push(`/?city=${city}`)
  }
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Buscar cidade (ex: Picuí)..."
        className="w-full p-4 pl-12 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-md"
      />
      <button type="submit">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
      </button>
    </form>
  );
}