"use client"

import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import axios from "axios";
import Link from "next/link";


export default function Home() {
  const [recommend, setRecommend] = useState([])
  const [all, setAll] = useState([])
  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/recommend',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setRecommend(response.data.data)
    }).catch((error) => {
      console.log(error)
    })

    axios({
      method: 'get',
      url: '/api/post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setAll(response.data.data)
    }).catch((error) => {
      console.log(error)

    })
  }, [])

  return (
    <div className="bg-[#9ec8ba] relative mb-60">
      <div><div className="carousel w-full px-5">
        <h1 className="mt-5 font font-bold text-2xl">REKOMENDASI</h1>
      </div>
        <div className="vertical-scroll scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate overflow-x-scroll flex scrollbar-track-[rgba(0, 0, 0, 0)] ">
          {recommend.map((item: any, index) => {
            return (


              <div id={`slide${index}`} className="carousel-item relative" key={index}>
                <Card
                  id={item.content_id}
                  title={item.content_title}
                  author={item.author}
                  desc={item.content_description}
                  img={item.cover_url}
                  user_id={item.user_id}
                />
              </div>
            )
          })}
        </div>

        <div className="px-5 mt-10">
          <h1 className="mt-5 font font-bold text-2xl">SEMUA</h1>

          <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
            {all.map((post: any, index) => {
              return (
                <div id={`slide${index}`} className="" key={index}>

                  <div key={index} className="card card-compact w-60 bg-base-100 shadow-xl">
                    <figure><img src={post.cover_url != null ? post.cover_url : `https://placehold.co/600x300?text=${post.content_title}`.replace(/ /g, "+")} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{post.content_title}</h2>
                      <p>{post.content_description.slice(0, 100)}....</p>
                      <div className="card-actions justify-end">
                        <Link className="btn bg-[#092635] text-white" href={"/preview/" + post.content_id}>LIHAT</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
