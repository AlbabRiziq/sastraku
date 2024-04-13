"use client"

import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from "axios";

import { Navigation } from 'swiper/modules';
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
      // console.log();


    }).catch((error) => {
      console.log(error)

    })
  }, [])


  return (
    <div className="bg-[#9ec8ba]">
      <div className="carousel w-full">



      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {data.map((item: any, index) => {
          return (
            <SwiperSlide key={index}>
              <div id={`slide${index}`} className="carousel-item relative w-full" key={index}>
                <Card
                  id={item.content_id}
                  title={item.content_title}
                  author={item.author}
                  desc={item.content_description}
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
