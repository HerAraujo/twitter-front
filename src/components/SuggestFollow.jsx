import { useState, useEffect } from "react";
import "./SuggestFollow.css";
const axios = require("axios");

function SuggestFollow() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get("http://localhost:8000/api/users");
    setUsers(data.sort());
  };
  console.log(users);
  const usersToSuggest = users.slice(0, 3);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="sg-follow-wrapper">
      {usersToSuggest.map((user) => {
        return (
          <div key={user._id} className="sg-follow-content">
            <div className="sg-follow-info">
              <img src={user.profileImage} alt={user.username} />
              <div className="sg-follow-name">
                <p>{user.firstname}</p>
                <span>{`@${user.username}`}</span>
              </div>
            </div>
            <div className="sg-follow-btn-container">
              <button className="sg-follow-btn">Follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SuggestFollow;
