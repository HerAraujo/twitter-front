import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios({
        method: "POST",
        url: "http://localhost:8000/api/users",
        data: {
          firstname: firstname,
          lastname: lastname,
          username: username,
          email: email,
          password: password,
        },
      });

      console.log("response", response);
      setEmail("");
      setLastname("");
      setFirstname("");
      setUsername("");
      setPassword("");

      if (response.status === 200) navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-background">
      <div className="form-container">
        <div className="container p-4">
          <div className="d-flex justify-content-end">
            <Link to={"/"}>
              <i className="fa-solid fa-xmark register-close"></i>
            </Link>
          </div>

          <div className="row d-flex justify-content-center">
            <span className="fa-stack fa-3x px-5 d-flex justify-content-center">
              <i className="fab fa-twitter blue-bird"></i>
            </span>
          </div>
          <div className="row px-5 py-3">
            <h1 className="label">Create your account</h1>
          </div>
          <div>
            <form
              className="container px-5"
              id="regForm"
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="pb-3">
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="pb-3">
                <input
                  className="form-control"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="pb-3">
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="pb-3">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="pb-5">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span className="error" aria-live="polite"></span>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill mb-4"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
