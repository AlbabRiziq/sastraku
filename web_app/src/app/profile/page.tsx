"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function Profile() {

    const [bio, setBio] = useState<String>("")


    useEffect(() => {

        const toastId = toast.loading('TUNGGU SEBENTAR...');
        axios({
            method: 'POST',
            url: '/api/profile',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response.data)
            toast.update(toastId, {
                render: "Berhasil mengubah bio",
                type: "success",
                isLoading: false,
            })
        }).catch((error) => {
            console.log(error)

            toast.update(toastId, {
                render: "Gagal mengubah bio",
                type: "error",
                isLoading: false,
            })
        })
    }, [])

    const updateBio = () => {
        axios({
            method: 'POST',
            url: '/api/profile/bio',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                bio: bio
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <main className="flex items-center justify-center w-screen flex-col">
            <ToastContainer />
            <div className="text-center mt-5">
                <h1 className="font-bold text-xl">RIZIQ LILI ULIL ALBAB</h1>
                <h3 className="italic">@albab</h3>
            </div>
            <div className="mt-5 text-center">
                <textarea onChange={e => {
                    setBio(e.target.value)

                }} className="textarea bg-[#9ec8ba] border border-[#092635] text-[#092635] w-48" placeholder="Bio" ></textarea><br />
                <button onClick={updateBio} type="button" className="btn text-xs bg-[#092635] text-[#9ec8ba] " >UPDATE BIO</button>
            </div>
        </main>
    );
}

export default Profile;
