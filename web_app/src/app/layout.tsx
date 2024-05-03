import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SASTRAKU"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#9ec8ba]">
      <body className={montserrat.className}>
        <main className="overflow-x-hidden">
          {children}
        </main>
        {/* <Analytics /> */}
        <Navbar />

      </body>

    </html>
  );
}
