import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "SASTRAKU"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#9ec8ba]">
      <body className={montserrat.className}>
        {children}
        <Navbar />
      </body>

    </html>
  );
}
