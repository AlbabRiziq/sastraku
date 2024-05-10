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
            title: title,
            description: desc.slice(0, 20),
        },
        keywords: "sastra, puisi, cerpen, novel, sastraku, karya,"
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