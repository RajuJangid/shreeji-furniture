import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Shreeji Furniture</h3>
          <p className="mb-4 max-w-sm text-sm text-slate-400">
            Premium turnkey interior contractors in Vadodara.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-orange-500 shrink-0" />
              <p>67, New Sama Rd, Vadodara, Gujarat 390024</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500 shrink-0" />
              <p>+91 98XXX XXXXX</p>
            </div>
          </div>
        </div>
        <div className="text-right text-xs text-slate-600 mt-auto">
          © {new Date().getFullYear()} Shreeji Furniture.
        </div>
      </div>
    </footer>
  );
}