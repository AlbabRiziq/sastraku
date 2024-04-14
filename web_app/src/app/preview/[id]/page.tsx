import Link from "next/link";
import Navbar from "../../../Components/Navbar/Navbar";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";
import Image from "next/image";

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


    const coverImg = data.cover_url || `https://placehold.co/600x300?text=${title}`.replace(/ /g, "+")
    console.log(coverImg);


    return (
        <div className="bg-[#9ec8ba] w-screen">

            <div className="p-5">
                <h1 className="font-bold text-[#092635] text-2xl">{title.toUpperCase()}</h1>
                <p className="italic text-xs">{author.toUpperCase()}</p>
                <img src={coverImg || `https://placehold.co/600x250?text=${title}`.replace(/ /g, "+")} alt="coverImage" className="w-full h-[300px] mt-5 rounded-lg object-cover" />
                {/* <img src={coverImg} alt="coverImage" className="w-full mt-5 rounded-lg" /> */}
                <p className="text-sm mt-10 text-justify">{desc}</p>
                <Link href={"/full/" + params.id}><p className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BACA</p></Link>

            </div>
            <Navbar />
        </div>
    )

}