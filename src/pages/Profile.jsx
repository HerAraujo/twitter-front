import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Tweets from "../components/Tweets";

function Profile() {
  const [tweets, setTweets] = useState([]);
  let params = useParams();

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/tweets/${params.username}`,
        });
        setTweets(response.data.tweets);
      } catch (error) {
        console.log("hola", error);
      }
    };
    getTweets();
  }, []);
  return (
    <div>
      <Tweets tweets={tweets} />
    </div>
  );
}

export default Profile;
