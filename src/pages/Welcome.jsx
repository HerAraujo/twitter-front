import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="package">
      <div className="hidden-footer">
        <span className="label-group">
          Made by the Group 8: Florencia Biazzi, Hernán Araújo and Luis Álvarez.
        </span>
      </div>
      <div className="left-side">
        <span className="white-bird">
          <i className="fab fa-twitter fa-inverse"></i>
        </span>
      </div>
      <div className="right-side">
        <div>
          <span className="fa-stack fa-3x">
            <i className="fab fa-twitter blue-bird"></i>
          </span>
        </div>
        <div>
          <span className="slogan">Happening now</span>
        </div>
        <div>
          <span className="slogan2">Join twitter today.</span>
        </div>
        <div>
          <Link to={"/login"}>
            <button
              className="welcome-page-btn btn-primary startBtn1"
              id="btn1"
            >
              Sign up with your email
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/register"}>
            <button
              className="welcome-page-btn bg-white text-primary startBtn2"
              id="btn2"
            >
              Sign in
            </button>
          </Link>
        </div>
        <div className="label-to-hide">
          <span className="label-group">
            Made by the Group 8: Florencia Biazzi, Hernán Araújo and Luis
            Álvarez.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
