import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import "./UserPill.css";

function UserPill() {
  const user = useSelector((state) => state.user);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/users/${user.username}`
      );
      console.log("data", data);
      setUserInfo(data);
    };
    getUser();
  }, []);
  console.log("userinfo", userInfo);

  return (
    <div>
      {userInfo && (
        <div className="user-pill-wrapper">
          <div className="user-pill-info">
            <div className="user-pill-photo">
              <img src={userInfo.profileImage} alt={userInfo.username} />
            </div>
            <div className="user-pill-name">
              <p>{userInfo.firstname}</p>
              <span>{user.username}</span>
            </div>
          </div>
          <div className="user-pill-modal-btn">
            <svg viewBox="0 0 24 24" className="user-pill-modal-dots-items">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserPill;
