import "./login.css";

import Link from "next/link";

function login() {
  return (
    <main>
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
                <form action="#" className="login">
                  <div className="field">
                    <input type="text" placeholder="Username" required="" />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required="" />
                  </div>
                  <div className="pass-link">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="field btn">
                    <div className="btn-layer" />
                    <input type="submit" defaultValue="Login" />
                  </div>
                  <div className="signup-link">
                    Not a member? <a href="">Signup now</a>
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