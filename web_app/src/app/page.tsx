import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import Content from "../Models/Content";
import dbConnect from "../lib/dbConnect";



async function getAllPost() {
  await dbConnect()

  try {
    const res = await Content.find()
    return res
  } catch (err) {
    return
  }


}



export default async function Home() {
  const data: Object[] = await getAllPost()


  return (
    <div className="bg-[#9ec8ba]">
      <div className="carousel w-full">


        {data.map((item: any, index) => {
          return (
            <div id={`slide${index}`} className="carousel-item relative w-full" key={index}>
              <Card
                id={item.content_id}
                title={item.content_title}
                author={item.author}
                desc={item.content_description}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${index - 1}`} className="btn btn-circle bg-transparent">
                </a>
                <a href={`#slide${index + 1}`} className="btn btn-circle bg-transparent">
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <Navbar />
    </div>
  );
}
