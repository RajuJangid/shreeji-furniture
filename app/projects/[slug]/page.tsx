import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Ruler, CheckCircle2, User } from "lucide-react";
import { projects } from "@/data/projects";
import ImageGallery from "@/components/ImageGallery";

// 1. Generate Static Params (Keeps the site fast)
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. The Page Component
// Notice the 'async' keyword and 'Promise' type - REQUIRED for Next.js 15
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // 3. Await the params to get the slug (The Critical Fix)
  const { slug } = await params;
  
  // 4. Find the project
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      
      {/* --- HERO HEADER --- */}
      <div className="relative h-[60vh] bg-slate-900">
        {project.thumbnail ? (
           <Image 
             src={project.thumbnail}
             alt={project.title}
             fill
             className="object-cover opacity-50"
             priority
           />
        ) : (
           <div className="absolute inset-0 bg-slate-800" />
        )}
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition w-fit">
            <ArrowLeft className="mr-2" size={20}/> Back to All Projects
          </Link>
          <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm font-bold w-fit mb-4 uppercase tracking-wider">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{project.title}</h1>
          <div className="flex items-center text-xl text-slate-200">
            <MapPin size={20} className="mr-2"/> {project.location}
          </div>
        </div>
      </div>

      {/* --- CONTENT SECTION --- */}
        {/* Changed -mt-16 to py-12 (Removed overlap, added spacing) */}
<div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Description & Gallery */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Project Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Project Gallery</h2>
              <ImageGallery images={project.gallery ? project.gallery.filter(Boolean) : []} />
            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mr-4">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Client</p>
                    <p className="text-slate-900 font-semibold">{project.clientName}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-50 p-2 rounded-lg text-orange-600 mr-4">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Timeline</p>
                    <div className="flex flex-col text-slate-900 font-semibold">
                      <span>{project.startDate}</span>
                      <span className="text-slate-400 text-xs">to</span>
                      <span>{project.endDate}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-50 p-2 rounded-lg text-green-600 mr-4">
                    <Ruler size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Area Size</p>
                    <p className="text-slate-900 font-semibold">{project.size}</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">Scope of Work</p>
                  <ul className="space-y-3">
                    {project.scope && project.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-700 text-sm">
                        <CheckCircle2 size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}