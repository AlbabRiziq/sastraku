"use client"

import Link from "next/link";
import Navbar from "../../../Components/Navbar/Navbar";
import dbConnect from "../../../lib/dbConnect";
import Content from "../../../Models/Content";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from 'next'
import { useEffect, useState } from "react";
import axios from "axios";
import Copy from "../../../Components/Copy/Copy";



// async function getData(id: string) {
//     dbConnect()

//     const res = await Content.findOne({ content_id: id })

//     // console.log(res);

//     return res

// }





export default function Page({ params }: { params: { id: string } }) {


    const [data, setData] = useState<any>()

    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/post",
            params: {
                id_post: params.id
            }
        }).then((res) => {

            console.log(res);

            setData(res.data.data)
        }).catch((err) => {
            console.log(err);

        })
    }, [])


    // if (!data) {
    //     return notFound()
    // }

    const salin = () => {
        navigator.clipboard.writeText(`${location.href}`)
    }




    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [coverImg, setCoverImg] = useState<string>("");

    useEffect(() => {
        if (data) {
            setTitle(data.content_title);
            setAuthor(data.author);
            setDesc(data.content_description);
            setCoverImg(data.cover_url || `https://placehold.co/600x300?text=${data.content_title}`.replace(/ /g, "+"));
        }
    }, [data]);



    return (
        <div className="bg-[#9ec8ba] w-screen">

            <div className="p-5">
                <h1 className="font-bold text-[#092635] text-2xl">{title.toUpperCase()}</h1>
                <p className="italic text-xs">{author.toUpperCase()}</p>
                <img src={coverImg || `https://placehold.co/600x250?text=${title}`.replace(/ /g, "+")} alt="coverImage" className="w-full h-[300px] mt-5 rounded-lg object-cover" />
                {/* <img src={coverImg} alt="coverImage" className="w-full mt-5 rounded-lg" /> */}
                <p className="text-sm mt-10 text-justify">{desc}</p>
                <Link href={"/full/" + params.id}><p className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BACA</p></Link>
                <button onClick={salin} className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BAGIKAN</button>
            </div>
            <br /><br /><br /><br />

            <Navbar />
        </div>
    )

}