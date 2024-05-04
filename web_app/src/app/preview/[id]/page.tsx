"use client"

import Link from "next/link";
import Navbar from "../../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Copy from "../../../Components/Copy/Copy";




export default function Page({ params }: { params: { id: string } }) {



    const [data, setData] = useState<any>()
    const [isSalin, setIsSalin] = useState<boolean>(false)
    const [url, setUrl] = useState<string>("")
    const [comment, setComment] = useState([])
    const [value, setValue] = useState<string>("")


    const getComment = () => {
        axios({
            method: "GET",
            url: "/api/post/comment",
            params: {
                content_id: params.id
            }
        }).then((res) => {
            console.log(res.data.data);

            setComment(res.data.data)
        }).catch((err) => {
            console.log(err);


        })
    }

    useEffect(() => {



        setUrl(window.location.href)

        axios({
            method: "GET",
            url: "/api/post",
            params: {
                id_post: params.id
            }
        }).then((res) => {

            // console.log(res);

            setData(res.data.data)
        }).catch((err) => {
            console.log(err);

        })

        getComment()
    }, [])


    // if (!data) {
    //     return notFound()
    // }

    const salin = () => {
        navigator.clipboard.writeText(url)
        setIsSalin(true)
    }

    const sendComment = () => {
        axios({
            method: "POST",
            url: "/api/post/comment",
            params: {
                content_id: params.id,
                value: value
            }
        }).then((res) => {
            console.log(res);
            getComment()

        }).catch((err) => {
            console.log(err);

        })

    }



    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [coverImg, setCoverImg] = useState<string>("");
    const [userId, setUserID] = useState<string>("");

    useEffect(() => {
        if (data) {
            setTitle(data.content_title);
            setAuthor(data.author);
            setDesc(data.content_description);
            setCoverImg(data.cover_url || `https://placehold.co/600x300?text=${data.content_title}`.replace(/ /g, "+"));
            setUserID(data.user_id);
        }
    }, [data]);



    return (
        <div className="bg-[#9ec8ba] w-screen">

            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">SALIN URL UNTUK DIBAGIKAN</h3>
                    <p className="py-4 border p-4 border-[#051720] rounded-2xl">{url}</p>
                    <div className="modal-action">
                        {isSalin ? <div className="text-sm btn  btn-disabled bg-green-500 text-[#051720]">Berhasil disalin</div> : <button onClick={salin} className="btn bg-[#051720] text-white mx-5">SALIN</button>
                        }
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">KELUAR</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className="p-10 max-w-4xl m-auto">
                <h1 className="font-bold text-[#092635] text-3xl">{title.toUpperCase()}</h1>
                <a className="italic text-sm underline" href={"/user?user_id=" + userId} >{author.toUpperCase()}</a>
                <img src={coverImg || `https://placehold.co/600x250?text=${title}`.replace(/ /g, "+")} alt="coverImage" className="w-full h-[300px] mt-5 rounded-lg object-cover" />
                {/* <img src={coverImg} alt="coverImage" className="w-full mt-5 rounded-lg" /> */}
                <p className="text-sm mt-10 text-justify">{desc}</p>
                <Link href={"/full/" + params.id}><p className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BACA</p></Link>
                <button onClick={() => {
                    (document.getElementById('my_modal_1') as HTMLDialogElement).showModal()
                }} className="btn text-xs px-12 bg-[#092635] text-[#9ec8ba] mt-5">BAGIKAN</button>



                <div className="comments">
                    <h1 className="font-bold text-[#092635] text-3xl my-10">Komentar</h1>
                    <label className="input mb-10 input-bordered flex items-center gap-2 p-0 pl-6">
                        <input type="text" className="grow" placeholder="TULIS KOMENTAR" onChange={(e) => setValue(e.target.value)} />
                        <button className="btn bg-[#092635] text-white hover:bg-gray-700" onClick={sendComment}>
                            KIRIM</button>
                    </label>
                    <div className="flex gap-2 mb-10  flex-col">
                        {comment.map((item: any, index: number) => (
                            <div className=" border p-5 border-[#092635] rounded-xl">
                                <Link href={"/user?user_id=" + item.user_id} className="font-bold italic underline">{item.nama_lengkap}</Link>
                                <p className="text-sm">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <br /><br /><br /><br />


            <Navbar />
        </div >
    )

}