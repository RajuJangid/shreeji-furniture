"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export default function Navbar() {
  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=I%20want%20a%20quote", "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl tracking-tighter text-blue-900">
          Shreeji<span className="text-orange-600">Furniture</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/projects" className="hidden md:block font-medium text-slate-600 hover:text-orange-600 transition">
            Projects
          </Link>
          <button 
            onClick={openWhatsApp}
            className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            <span className="hidden md:inline">WhatsApp</span>
          </button>
        </div>
      </div>
    </nav>
  );
}