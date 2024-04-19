import Link from "next/link";
import dbConnect from "../../../lib/dbConnect"
import Content from "../../../Models/Content"
import User from "../../../Models/User";
import type { Metadata } from 'next'




async function getData(params) {
    await dbConnect()
    const user_data: any = await User.findOne({ username: params.username })

    const user_id = user_data.user_id
    const namaLengkap = user_data.nama_lengkap
    const posts_data = await Content.find({ user_id: user_id })
    const total_karya = posts_data.length


    // console.log(user_data);

    return { user_data, posts_data, total_karya, namaLengkap: namaLengkap }
}



export async function generateMetadata({ params }: { params: { username: string } }) {

    const { namaLengkap } = await getData(params)

    return {
        title: `PROFIL ${namaLengkap.toUpperCase()} | @${params.username}`
    }
}
export default async function Page({ params }: { params: { username: string } }) {

    const { user_data, posts_data, total_karya } = await getData(params)


    return (
        <main className="flex flex-col items-center justify-center p-5 text-[#092635]">
            <h1 className="font-bold text-xl">RIZIQ LILI ULIL ALBAB</h1>
            <h2 className="italic">@{params.username}</h2>
            <p className="italic text-center mt-5">{user_data.bio != null ? user_data.bio : "-"}</p>
            <a className="btn mt-2 bg-[#092635] text-white px-9">
                TOTAL KARYA
                <div className="badge">{total_karya}</div>
            </a>

            <div className="mt-5 flex flex-col items-center pt-5">
                <h1 className="font-bold text-xl">KARYA</h1>
                <div className="mt-10 flex flex-wrap items-center justify-evenly gap-4">
                    {
                        posts_data.map((post: any, index: number) => {
                            const desc: String = post.content_description
                            return (
                                <div key={index} className="card card-compact w-60 bg-base-100 shadow-xl">
                                    <figure><img src={post.cover_url != null ? post.cover_url : `https://placehold.co/600x300?text=${post.content_title}`.replace(/ /g, "+")} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{post.content_title}</h2>
                                        <p>{desc.slice(0, 100)}....</p>
                                        <div className="card-actions justify-end">
                                            <Link className="btn bg-[#092635] text-white" href={"/preview/" + post.content_id}>LIHAT</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <br /><br /><br /><br /><br /><br />
        </main>
    )
}