"use client";

import Link from "next/link";
import axios from "axios";
import "./login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    axios({
      url: "/api/login",
      method: "POST",
      params: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        toast.success("Login berhasil", {
          onClose: () => {
            location.href = "/";
          },
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
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
                {/* <input type="radio" name="slide" id="login" defaultChecked="" />
                <Link href="/signup" id="login">
                  Home
                </Link>
                <input type="radio" name="slide" id="signup" /> */}
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
                <form action="/api/login" method="POST" className="login">
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    <div className="btn-layer" />
                    <button type="button" className="btn" onClick={handleLogin}>
                      Login
                    </button>
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="/signup">Signup now</a>
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

export default login;
