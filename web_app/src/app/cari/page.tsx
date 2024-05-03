"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import {  } from "next/router";
import { Suspense } from 'react'
import { useCallback, useEffect, useState } from "react";

function Page() {

    const router = useRouter()
    const pathname = usePathname()



    const searchParams = useSearchParams()
    const [search, setSearch] = useState("")
    const [q, setQ] = useState("");
    const [category, setCategory] = useState([])
    const [result, setResult] = useState([])

    useEffect(() => {
        setQ(searchParams.getAll("q")[0])

    }, [searchParams])

    useEffect(() => {
        axios({
            url: '/api/post/search',
            method: 'GET',
            params: {
                q: q
            }
        }).then(res => {
            setResult(res.data.data)

        })

    }, [q])

    useEffect(() => {
        axios({
            url: '/api/kategori',
            method: 'GET',
        }).then(res => {
            setCategory(res.data)
        })
    }, [])


    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )




    return (
        <main className="p-5">
            <label className="input input-bordered flex items-center gap-2 p-0 pl-6">
                <input type="text" className="grow" placeholder="CARI" onChange={(e) => setSearch(e.target.value)} />
                <button className="btn bg-[#092635] text-white hover:bg-gray-700" onClick={() => {
                    // <pathname>?sort=asc
                    router.push(pathname + '?' + createQueryString('q', search))
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>CARI</button>
            </label>
            {q == undefined || q == "" || q == null ? (
                <section className="mt-10 flex gap-3">
                    {/* {category.map((item, index) => (
                        <Link href="#" className="boxKategori bg-[#092635] text-white p-5 w-fit rounded" onClick={tess}>
                            {item.category_name}
                        </Link>
                    ))} */}
                </section>
            ) : (
                <div className="mt-10 flex gap-3">
                    {result[0] == undefined || result[0] == "" ? (
                        <div className="text-center w-full">
                            <h1 className="font-bold">KARYA TIDAK DITEMUKAN</h1>
                        </div>
                    ) : (
                        result.map((item, index) => (
                            <Link href={"/preview/" + item.content_id} className="card card-compact w-60 bg-base-100 shadow-xl">
                                <figure><img className="w-full h-[200px] object-cover" src={item.cover_url != null ? item.cover_url : `https://placehold.co/300x300?text=${item.content_title}`.replace(/ /g, "+")} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.content_title}</h2>
                                    <p>{item.content_description.slice(0, 100)}....</p>
                                    <div className="card-actions justify-end">
                                        <Link className="btn bg-[#092635] text-white" href={"/preview/" + item.content_id}>LIHAT</Link>
                                    </div>
                                </div>
                            </Link>
                        ))

                    )}
                </div>
            )}
        </main>
    );
}


export default Page;