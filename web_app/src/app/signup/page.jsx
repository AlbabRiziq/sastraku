"use client";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

import "./signup.css";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");

  const handleSignUp = () => {
    console.log("asd");
    if (pass == confirmPass) {
      axios({
        url: "/api/signup",
        method: "POST",
        params: {
          username: username,
          password: pass,
          nama_lengkap: namaLengkap,
        },
      })
        .then((res) => {
          toast.success("Username berhasil ditambahkan, silahkan login ulang", {
            onClose: () => {
              location.href = "/login";
            },
          });
        })
        .catch((err) => {
          toast.error(err.response.data.message);
          // console.log();
        });
      // console.log(process.env.);
    } else {
      toast.error("Pastikan konfirmasi password harus saama");
    }
  };

  return (
    <main>
      <ToastContainer />
      <div className="container">
        <div className="left">
          <div className="centered">
            <h3>
              “Di air yang tenang, di angin mendayu, di perasaan penghabisan
              segala melaju. Ajal bertakhta, sambil berkata: Tujukan perahu ke
              pangkuanku saja”
            </h3>
            <br />
            <i>
              <p>Chairil Anwar</p>
            </i>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="title-text">
              <div className="title login">Login</div>
              <div className="title signup">Signup</div>
            </div>
            <div className="form-container">
              <div className="slide-controls">
                <label htmlFor="login" className="slide login">
                  <a href="/login">
                    <strong>LOGIN</strong>
                  </a>
                </label>
                <label htmlFor="signup" className="slide signup">
                  <a href="/signup">
                    <strong>SIGNUP</strong>
                  </a>
                </label>
                <div className="slider-tab" />
              </div>
              <div className="form-inner">
                <form className="signup">
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Nama Lengkap"
                      name="nama_lengkap"
                      required=""
                      onChange={(e) => setNamaLengkap(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      required=""
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Password"
                      required=""
                      name="password"
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <input
                      type="password"
                      placeholder="Konfirmasi password"
                      required
                      name="confirmPass"
                      onChange={(e) => setConfirmPass(e.target.value)}
                    />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer" />
                    <button
                      type="button"
                      className="btn"
                      onClick={handleSignUp}
                    >
                      DAFTAR
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
