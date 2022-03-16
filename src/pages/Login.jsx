import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-background">
      <div className="form-container">
        <div className="container p-4">
          <div className="d-flex justify-content-end">
            <Link to={"/"}>
              <i className="fa-solid fa-xmark login-close"></i>
            </Link>
          </div>
          <span className="fa-stack fa-3x">
            <i className="fab fa-twitter blue-bird"></i>
          </span>
          <h1 className="">Incia sesión en Twitter</h1>
          <form className="m-auto text-start" action="/login" method="POST">
            <label className="login-label" htmlFor="username">
              Username
            </label>
            <input
              className="form-control"
              name="username"
              id="username"
              type="text"
              placeholder="Insert your username..."
            />
            <label className="login-label mt-4" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Insert your password..."
            />
            <input
              className="btn rounded-pill w-100 btn-primary my-5"
              type="submit"
              value="Log in"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
