import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Shreeji Furniture | Interior Contractor Vadodara",
  description: "Turnkey furniture solutions for home and office.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 antialiased text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}