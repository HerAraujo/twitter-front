import React, { useEffect, useState } from "react";
import LogoutModal from "./LogoutModal";
import "./BottomNavbar.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BottomNavbar() {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/users/${user?.username}`
      );
      setUserInfo(data);
    };
    getUser();
  }, []);

  return (
    <div className="d-flex d-sm-none justify-content-around bottom-navbar align-items-center p-2">
      <Link to={"/home"}>
        <i className="navbar-icon fas fa-home fa-xl"></i>
      </Link>
      <Link to={`/${user?.username}`}>
        <i className="navbar-icon fas fa-user fa-xl"></i>
      </Link>

      <img
        className="bottom-navbar-photo"
        src={userInfo.profileImage}
        alt={userInfo.username}
        onClick={() => setShowModal((prev) => !prev)}
      />
      <button className="btn rounded-pill btn-primary">New Tweet</button>
      {showModal && <LogoutModal />}
    </div>
  );
}

export default BottomNavbar;
