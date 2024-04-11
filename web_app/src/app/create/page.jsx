"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import axios from "axios";
import {
  Editor,
  EditorProvider,
  BtnBold,
  BtnClearFormatting,
  Toolbar,
  BtnUndo,
  BtnRedo,
  BtnItalic,
  BtnStyles,
} from "react-simple-wysiwyg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Post() {
  const [dataKategori, setDataKategori] = useState([]);
  const [dataTema, setDataTema] = useState([]);
  const [desc, setDesc] = useState("");
  const [kategori, setKategori] = useState("");
  const [tema, setTema] = useState("");
  const [title, setTitle] = useState("");
  const [isi, setIisi] = useState();

  useEffect(() => {
    axios.get("/api/kategori").then((res) => {
      setDataKategori(res.data);
    });

    axios.get("/api/tema").then((res) => {
      setDataTema(res.data);
    });
  }, []);

  const handlePost = () => {
    console.log(tema);
    axios({
      method: "POST",
      url: "/api/create",
      params: {
        value: isi,
        content_title: title,
        content_description: desc,
        sub_category_id: tema,
        category_id: kategori,
      },
    })
      .then((res) => {
        toast.success("Berhasil membuat karya");
      })
      .catch((err) => {
        toast.error("Gagal membuat karya, pastikan semua form terisi");
      });
  };

  return (
    <div className="w-screen p-5">
      <ToastContainer />
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
          onChange={(e) => setTema(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          {dataTema.map((item, index) => (
            <option key={index} value={item.sub_category_id}>
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
        <EditorProvider>
          <Editor
            className="bg-gray-500 bg"
            value={isi}
            onChange={(e) => {
              setIisi(e.target.value);
            }}
          >
            <Toolbar>
              <BtnUndo />
              <BtnRedo />
              <BtnItalic />
              <BtnBold />
              <BtnClearFormatting />
              <BtnStyles />
            </Toolbar>
          </Editor>
        </EditorProvider>
      </div>
      <button className="btn mt-5" onClick={handlePost}>
        SELESAI
      </button>
      <br />
      <br />
      <br />

      <Navbar onHandleChange={(e) => console.log(e)} />
    </div>
  );
}

export default Post;
