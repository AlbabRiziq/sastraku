"use client"

import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {

    const searchParams = useSearchParams()


    const tess = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set("tes", "ts12")
    }



    const [category, setCategory] = useState([])

    useEffect(() => {
        axios({
            url: '/api/kategori',
            method: 'GET',
        }).then(res => {
            setCategory(res.data)
        })
    }, [])

    return (
        <main className="p-5">
            <label className="input input-bordered flex items-center gap-2 p-0 pl-6">
                <input type="text" className="grow" placeholder="CARI" />
                <button className="btn bg-[#092635] text-white hover:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>CARI</button>
            </label>
            <section className="mt-10 flex gap-3">
                {category.map((item, index) => (
                    <Link href="#" className="boxKategori bg-[#092635] text-white p-5 w-fit rounded" onClick={tess}>
                        {item.category_name}
                    </Link>
                ))}
            </section>
        </main>
    );
}


export default Page;