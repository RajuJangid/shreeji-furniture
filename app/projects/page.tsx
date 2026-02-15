"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // <--- Make sure this is imported
import { Search, MapPin, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter((p) => 
    p.clientName.toLowerCase().includes(query.toLowerCase()) ||
    p.location.toLowerCase().includes(query.toLowerCase()) ||
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 bg-white rounded-full shadow hover:shadow-md transition">
            <ArrowLeft size={20} className="text-slate-700"/>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">All Projects</h1>
        </div>

        <div className="relative mb-12 max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 pl-12 rounded-xl border border-slate-200"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 text-slate-400" size={20} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            /* --- CRITICAL FIX IS HERE --- */
            /* You MUST use backticks (the key above Tab), NOT single quotes */
            <Link href={`/projects/${project.slug}`} key={project.id} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                     <p className="text-white font-bold truncate">{project.clientName}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm">
                    <MapPin size={16} className="mr-1 text-orange-500" /> {project.location}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}