"use client"

import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import axios from "axios";


export default function Home() {
  const [recommend, setRecommend] = useState([])
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
  }, [])



  return (
    <div className="bg-[#9ec8ba] relative">
      <div className="carousel w-full px-5">
        <h1 className="mt-5 font font-bold text-xl">REKOMENDASI</h1>
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
    </div>
  );
}
