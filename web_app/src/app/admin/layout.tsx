import type { Metadata } from "next";
import dbConnect from "../../lib/dbConnect";
import User from "../../Models/User";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'
import { notFound } from "next/navigation";


export const metadata: Metadata = {
    title: "SASTRAKU",
    description: "Platform berbagi karya sastra",
    openGraph: {
        images: "../assets/img/logo.png",
    },

    keywords: ["sastra", "karya", "platform", "sastra", "sastraku", "karya sastra", "puisi", "contoh puisi", "cerpen", "contoh cerpen", "novel", "contoh novel", "kumpulan puisi", "kumpulan cerpen", "kumpulan novel", "kumpulan karya sastra", "karya sastra terbaik", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya"],
};



export default async function RootLayout({ children }) {
    const cookie = cookies()
    const token = cookie.get('tkn').value
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY)


    if (decoded) {
        await dbConnect()
        const user = await User.findOne({ user_id: decoded.user_id })

        const roleUser = user.role

        if (roleUser === 'user') {
            notFound()
        }
    }









    return (
        <section className="overflow-x-hidden">
            {children}
        </section>

    );
}
