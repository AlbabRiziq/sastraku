import Link from "next/link";
import Navbar from "../../../Components/Navbar/Navbar";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";

async function getData(id: string) {
    dbConnect()

    const res = await Content.findOne({ content_id: id })

    return res

}
export default async function Page({ params }: { params: { id: string } }) {
    const data = await getData(params.id)
    const title: String = data.content_title
    const author: String = data.author
    const desc: String = data.content_description



    return (
        <div className="bg-[#9ec8ba] ">
            <div className="container">
                <div className="p-5">
                    <h1>{title.toUpperCase()}</h1>
                    <p className="italic text-xs">{author.toUpperCase()}</p>
                    <p className="text-sm mt-10 text-justify">{desc}</p>
                    <Link href={"/full/" + params.id}><p className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BACA</p></Link>

                </div>
            </div>
            <Navbar />
        </div>
    )

}