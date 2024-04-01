"use client";

import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

import dynamic from "next/dynamic";

function Post() {
  const Editor = dynamic(() => import("../../Components/Editor/Editor"), {
    ssr: false,
  });
  const [isi, setIsi] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div className="w-screen p-2">
      <h1 className="font-bold text-2xl">BUAT KARYA</h1>

      <div className="mt-5">
        <label htmlFor="title">MASUKAN JUDUL KARYA</label>
        <br />
        <input
          type="text"
          placeholder="Type here"
          name="title"
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <label htmlFor="kategori">MASUKAN KATEGORI</label>
        <br />
        <select className="select select-bordered w-full max-w-xs">
          <option>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <br />
        <br />
        <label htmlFor="kategori">MASUKAN TEMA</label>
        <br />
        <select className="select select-bordered w-full max-w-xs">
          <option>Who shot first?</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
        <br />
      </div>

      <div className="mt-10">
        <Editor onChange={(v) => console.log(v)} />
      </div>

      <Navbar />
    </div>
  );
}

export default Post;
