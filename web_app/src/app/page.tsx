"use client"

import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

// import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios({
      method: 'get',
      url: '/api/post',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setData(response.data.data)
      console.log(response.data.data);


    }).catch((error) => {
      console.log(error)

    })
  }, [])


  return (
    <div className="bg-[#9ec8ba] relative">
      <div className="carousel w-full px-5">
        <h1 className="mt-5 font font-bold text-xl">REKOMENDASI</h1>
      </div>
      <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}

        navigation
      >
        {data.map((item: any, index) => {
          return (
            <SwiperSlide key={index} >
              <div id={`slide${index}`} className="carousel-item relative w-full" key={index}>
                <Card
                  id={item.content_id}
                  title={item.content_title}
                  author={item.author}
                  desc={item.content_description}
                  img={item.cover_url}
                />

              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Navbar />
    </div>
  );
}
