"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {

    const [bio, setBio] = useState<String>("")
    const [username, setUsername] = useState<String>("")
    const [namaLengkap, setNamaLengkap] = useState<String>("")
    const [karya, setKarya] = useState<Array<any>>([])




    useEffect(() => {

        axios({
            method: 'GET',
            url: '/api/profile',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setUsername(response.data.username)
            setNamaLengkap(response.data.nama_lengkap)

        }).catch((error) => {
        })
        axios({
            method: 'GET',
            url: '/api/profile/posts',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setKarya(response.data)


        }).catch((error) => {
        })


        axios({
            method: 'GET',
            url: '/api/profile/bio',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            setBio(response.data.bio)

        }).catch((error) => {

        })


    }, [])





    const deletePost = (id_post: String) => {


        console.log(id_post);

        const toast_id = toast.loading("TUNGGU SEBENTAR...", { isLoading: true })

        axios({
            method: 'DELETE',
            url: '/api/profile/posts',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                id_post: id_post
            }
        }).then(res => {
            toast.update(toast_id, { render: "Karya berhasil dihapus", type: "success", isLoading: false, autoClose: 3000, onClose: () => { window.location.reload() } });

        })
    }


    const updateBio = () => {

        const toastID = toast.loading('Tunggu sebentar', { isLoading: false });



        axios({
            method: 'POST',
            url: '/api/profile/bio',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                bio: bio
            }
        }).then((response) => {
            console.log(response.data)
            toast.update(toastID, {
                render: "Berhasil update bio",
                type: "success",
                autoClose: 3000
            });
        }).catch((error) => {
            console.log(error)
            toast.update(toastID, {
                render: "Gagal update bio",
                type: "error",
                autoClose: 3000
            });
        })
    }

    return (
        <main className="flex items-center justify-center w-screen flex-col mb-20">
            <ToastContainer />
            <div className="text-center mt-5">
                <h1 className="font-bold text-xl">{namaLengkap}</h1>
                <h3 className="italic">@{username}</h3>
            </div>
            <div className="mt-5 text-center ">
                <textarea value={`${bio}`} onChange={e => {
                    setBio(e.target.value)
                }} className="textarea bg-[#9ec8ba] border border-[#092635] text-[#092635] w-48" placeholder="Bio" ></textarea><br />
                <button onClick={updateBio} type="button" className="btn text-xs bg-[#092635] text-[#9ec8ba] " >UPDATE BIO</button>
            </div>
            <div className="content w-full mt-6 ">
                <h1 className="text-center font-bold text-xl mb-5">DAFTAR KARYA</h1>
                <div>
                    <div className="flex flex-wrap justify-evenly gap-5">
                        {karya.map((item, index) => (
                            <div className="card-body max-w-lg border rounded-xl min-w-40">
                                <h1 className="font-bold text-xl uppercase">{item.content_title}</h1>
                                <img src={item.cover_url != null ? item.cover_url : `https://placehold.co/600x300?text=${item.content_title}`.replace(/ /g, "+")} className="h-60 object-cover rounded-lg" alt="" />
                                <p>{item.content_description.slice(0, 100)}.....</p>
                                <div className="flex justify-end">
                                    <Link href={`/preview/${item.content_id}`} className="btn bg-[#092635] text-[#9ec8ba]">LIHAT</Link>
                                    <label htmlFor={`confirmDelete_${item.content_id}`} className="btn bg-[#092635] text-[#9ec8ba]">Hapus</label>
                                    <input type="checkbox" id={`confirmDelete_${item.content_id}`} className="modal-toggle" />
                                    <div className="modal" role="dialog">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">APAKAH YAKIN INGIN MENGHAPUS KARYA KAMU?</h3>
                                            <div className="modal-action">
                                                <button onClick={() => deletePost(item.content_id)} className="btn bg-red-500 text-white" >IYA</button>
                                                <label htmlFor={`confirmDelete_${item.content_id}`} className="btn">BATAL</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Profile;
