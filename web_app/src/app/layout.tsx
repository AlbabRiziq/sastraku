import type { Metadata } from "next";

import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SASTRAKU",
  description: "Platform berbagi karya sastra",
  openGraph: {
    images: "../assets/img/logo.png",
  },

  keywords: ["sastra", "karya", "platform", "sastra", "sastraku", "karya sastra", "puisi", "contoh puisi", "cerpen", "contoh cerpen", "novel", "contoh novel", "kumpulan puisi", "kumpulan cerpen", "kumpulan novel", "kumpulan karya sastra", "karya sastra terbaik", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#9ec8ba]">
      <body className={montserrat.className}>
        <main className="overflow-x-hidden">
          {children}
        </main>
        /* <Analytics /> */
        <Navbar />

      </body>
    </html>
  );
}
