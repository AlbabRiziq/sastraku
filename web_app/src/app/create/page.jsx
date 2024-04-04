"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";

import dynamic from "next/dynamic";

function Post() {
  const Editor = dynamic(() => import("../../Components/Editor/Editor"), {
    ssr: false,
  });

  const [dataKategori, setDataKategori] = useState([]);
  const [dataTema, setDataTema] = useState([]);
  const [isi, setIsi] = useState("");
  const [desc, setDesc] = useState("");
  const [kategori, setKategori] = useState("");
  const [tema, setTema] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    axios.get("/api/kategori").then((res) => {
      setDataKategori(res.data);
    });

    axios.get("/api/tema").then((res) => {
      setDataTema(res.data);
    });
  }, []);

  const handlePost = () => {
    axios
      .post("/api/create", {
        value: isi,
        content_title: title,
        content_description: desc,
        sub_category_id: tema,
        category_id: kategori,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="w-screen p-5">
      <h1 className="font-bold text-2xl">BUAT KARYA</h1>

      <div className="mt-5">
        <label htmlFor="title">MASUKAN JUDUL KARYA</label>
        <br />
        <input
          type="text"
          placeholder="Type here"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <label htmlFor="kategori">MASUKAN KATEGORI</label>
        <br />
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setKategori(e.target.value)}
        >
          {dataKategori.map((item) => (
            <option key={item.id} value={item.category_id}>
              {item.category_name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="kategori">MASUKAN TEMA</label>
        <br />
        <select
          onSelect={(e) => setTema(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          {dataTema.map((item) => (
            <option key={item.sub_category_id} value={item.sub_category_id}>
              {item.sub_category_name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label htmlFor="kategori">DESKRIPSI SINGKAT (SINOPSIS)</label>
        <br />
        <textarea
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Bio"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <br />
      </div>

      <div className="mt-10">
        <Editor onChange={(v) => setIsi(v)} />
      </div>

      <button className="btn mt-5">SELESAI</button>

      <Navbar />
    </div>
  );
}

export default Post;
