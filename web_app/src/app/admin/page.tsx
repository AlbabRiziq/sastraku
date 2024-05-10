"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


function Page() {
    const [dataReport, setDataReport] = useState<any>([])
    const [dataStats, setDataStats] = useState<any>([])


    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/post/report"
        }).then((res) => {
            setDataReport(res.data.data)


        }).catch((err) => {
            console.log(err);

        })

        axios({
            method: "GET",
            url: "/api/admin"
        }).then((res) => {
            setDataStats(res.data.body)

        }).catch((err) => {
            console.log(err);


        })

    }, [])

    return (
        <div className="w-full p-5 text-center">
            <div className="stats shadow justify-center flex mb-5">

                <div className="stat place-items-center">
                    <div className="stat-title">TOTAL POSTINGAN</div>
                    <div className="stat-value">{dataStats.total_content}</div>
                </div>

                <div className="stat place-items-center">
                    <Link href="/admin/akun">
                        <div className="stat-title">TOTAL AKUN</div>
                        <div className="stat-value text-secondary">{dataStats.total_user}</div>
                    </Link>
                </div>
            </div>
            <div className="laporan">

                <h1 className="font-bold">POSTINGAN DILAPORKAN</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>JUDUL</th>
                                <th>ALASAN</th>
                                <th>AKSI</th>
                            </tr>
                        </thead>
                        <tbody>



                            {
                                dataReport.map((item: any, index: number) => (
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.reason}</td>
                                        <td>
                                            <div className="flex gap-2">
                                                <button className="btn btn-danger">Hapus</button>
                                                <Link href={`/preview/${item.post_id}`} className="btn btn-danger">LIHAT</Link>
                                            </div>
                                        </td>
                                    </tr>

                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Page;