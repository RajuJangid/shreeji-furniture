"use client";

import Image from "next/image";
import Link from "next/link";
import { Hammer, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Home() {
  
  const openWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=I%20want%20a%20furniture%20quote", "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Interior Background"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Turnkey Interior Contractors <br/> in Vadodara
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            We don't just sell furniture. We build your dream space on-site. 
            Complete labor & material contracts.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button 
              onClick={openWhatsApp}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight size={20}/>
            </button>
            <Link href="/projects" className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Hire Us?</h2>
            <p className="text-slate-600">Direct labor, transparent material costs, and timely delivery.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "On-Site Execution", icon: Hammer, desc: "We build everything at your location to ensure perfect fitting and zero gaps." },
              { title: "Material Transparency", icon: CheckCircle2, desc: "You choose the plywood and laminates. We provide the skilled labor." },
              { title: "Local Expertise", icon: MapPin, desc: "Based in New Sama Road, serving all of Vadodara for 10+ years." }
            ].map((service, idx) => (
              <div key={idx} className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO PREVIEW --- */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Recent Projects</h2>
              <p className="text-slate-600">Browse our latest turnkey contracts.</p>
            </div>
            <Link href="/projects" className="text-orange-600 font-bold hover:underline hidden md:block">
              View All Projects →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* We slice(0,3) to only show the first 3 items on the home page */}
            {projects.slice(0, 3).map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  {/* FIX: Changed from project.image to project.thumbnail */}
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">{project.title}</h3>
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <MapPin size={14} className="mr-1" /> {project.location}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/projects" className="text-orange-600 font-bold hover:underline">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile WhatsApp Button (Fixed at bottom right) */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 md:hidden z-50 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition-all"
      >
        <Phone size={24} />
      </button>

    </main>
  );
}

// Helper component for the Phone icon since we didn't import it in the main component to keep it clean
function Phone({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}