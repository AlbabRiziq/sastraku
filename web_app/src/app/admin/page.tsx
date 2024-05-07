"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


function Page() {
    const [dataReport, setDataReport] = useState<any>([])


    useEffect(() => {
        axios({
            method: "GET",
            url: "/api/post/report"
        }).then((res) => {
            setDataReport(res.data.data)
            console.log(res.data.data);

        }).catch((err) => {
            console.log(err);

        })
    }, [])

    return (
        <div className="w-full">
            <div className="stats shadow justify-center flex">

                <div className="stat place-items-center">
                    <div className="stat-title">TOTAL POSTINGAN</div>
                    <div className="stat-value">31K</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">TOTAL AKUN</div>
                    <div className="stat-value text-secondary">4,200</div>
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