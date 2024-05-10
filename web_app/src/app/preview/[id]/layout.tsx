import { notFound } from "next/navigation"
import dbConnect from "../../../lib/dbConnect"
import Content from "../../../Models/Content"
import { Metadata } from "next"


async function getData(id: string) {
    dbConnect()
    const res = await Content.findOne({ content_id: id })
    // console.log(res);

    return res

}


export const metadata: Metadata = {
    title: "SASTRAKU | CARI KARYA",
    description: "Platform berbagi karya sastra",
    openGraph: {
        images: "../assets/img/logo.png",
    },

    keywords: ["sastra", "karya", "platform", "sastra", "sastraku", "karya sastra", "puisi", "contoh puisi", "cerpen", "contoh cerpen", "novel", "contoh novel", "kumpulan puisi", "kumpulan cerpen", "kumpulan novel", "kumpulan karya sastra", "karya sastra terbaik", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya sastra terfavorit", "karya sastra terkreatif", "karya sastra terinspiratif", "karya sastra terkeren", "karya sastra terhebat", "karya sastra terbaru", "karya sastra terpopuler", "karya sastra terlengkap", "karya sastra terindah", "karya sastra terunik", "karya sastra terbagus", "karya"],
};

export async function generateMetadata({ params }: { params: { id: string } }) {

    const data = await getData(params.id)
    if (!data) {
        return notFound()

    }

    const title: String = data.content_title
    const author: String = data.author
    const desc: String = data.content_description
    const coverImg = data.cover_url != null ? [{ url: data.cover_url }] : [{ url: `https://placehold.co/600x300?text=${title}`.replace(/ /g, "+") }]


    return {
        title: `${title} | ${author}`,

        description: desc.slice(0, 20),
        openGraph: {
            images: coverImg,
        },
    }

}


export default function DashboardLayout({ params, children }: { params: { id: string }, children: React.ReactNode }) {

    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>
            {children}
        </section>
    )
}