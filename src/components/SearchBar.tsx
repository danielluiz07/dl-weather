"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md mx-auto mb-8">
      <input
        type="text"
        placeholder="Buscar cidade..."
        className="w-full p-4 pl-12 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all backdrop-blur-md"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={20} />
    </div>
  );
}