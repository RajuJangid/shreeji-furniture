export default function Loading() {
  return (
    <div className="fixed inset-0 bg-slate-50 z-50 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-orange-600 rounded-full animate-spin mb-4"></div>
      <p className="text-slate-500 font-medium animate-pulse">Loading Project...</p>
    </div>
  );
}