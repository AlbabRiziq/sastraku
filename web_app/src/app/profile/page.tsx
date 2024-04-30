"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {

    const [bio, setBio] = useState<String>("")




    useEffect(() => {

        axios({
            method: 'POST',
            url: '/api/profile',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
        }).catch((error) => {
        })
    }, [])

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
