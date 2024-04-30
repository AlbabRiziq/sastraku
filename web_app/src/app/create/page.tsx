"use client";

import { useEffect, useState } from "react";
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
import { set } from "mongoose";


function Post() {
  const [dataKategori, setDataKategori] = useState([]);
  const [dataTema, setDataTema] = useState([]);
  const [desc, setDesc] = useState("");
  const [kategori, setKategori] = useState("");
  const [tema, setTema] = useState("");
  const [title, setTitle] = useState("");
  const [isi, setIisi] = useState("");
  const [file, setFile] = useState<File>();

  const handleFile = (e: FileList) => {
    setFile(e[0]);

  }

  useEffect(() => {
    axios.get("/api/kategori").then((res) => {
      setDataKategori(res.data);
    });

    axios.get("/api/tema").then((res) => {
      setDataTema(res.data);
    });
  }, []);

  const handlePost = () => {
    const loading = toast.loading("Tunggu sebentar");
    axios({
      method: "POST",
      url: "/api/post",
      data: {
        value: isi,
        content_title: title,
        content_description: desc,
        sub_category_id: tema,
        category_id: kategori,
        file: file,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      }
    }).then((res) => {
      console.log(res.data);

      toast.update(loading, {
        render: "Karya berhasil diunggah",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        onClose: () => {
          window.location.href = `/preview/${res.data.id}`;
        }
      });
    }).catch((err) => {
      toast.update(loading, {
        render: "Gagal mengunggah karya",
        type: "error",
        isLoading: false,
        autoClose: 2000
      })
    })
  }


  const paste = async () => {
    setIisi(isi + await navigator.clipboard.readText())

  }


  return (
    <div className="w-screen p-5 flex flex-col ">
      <ToastContainer />
      <h1 className="font-bold text-2xl">BUAT KARYA</h1>
      <form className="mt-5 overflow-x-hidden" encType="multipart/form">
        <label htmlFor="title">MASUKAN JUDUL KARYA</label>
        <br />
        <input
          type="text"
          placeholder="Type here"
          name="content_title"
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <label htmlFor="title">MASUKAN SAMPUL GAMBAR (opsional)</label>
        <br />
        <input type="file" name="file" onChange={e => handleFile(e.target.files)} className="file-input file-input-bordered w-full max-w-xs" />
        <br />
        <label htmlFor="kategori">MASUKAN KATEGORI</label>
        <br />
        <select
          name="category_id"
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setKategori(e.target.value)}
        >
          <option>
            Pilih Kategori
          </option>
          {dataKategori.map((item, index) => (
            <option key={index} value={item.category_id}>
              {item.category_name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <label>MASUKAN TEMA</label>
        <br />
        <select
          name="sub_category_id"
          onChange={(e) => setTema(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option>
            Pilih Tema
          </option>
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
          name="content_description"
          className="textarea textarea-bordered w-full max-w-xs"
          placeholder="Bio"
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <br />
      </form>
      <div className="mt-10">
        <EditorProvider>
          <Editor
            containerProps={{}}
            className="bg-gray-500 bg"
            value={isi}
            name="value"
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
              <button className="btn bg-[#092635] text-white" onClick={paste}>TEMPEL SALINAN</button>
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

      <br /><br /><br /><br />
      <Navbar />
    </div>
  );
}

export default Post;
