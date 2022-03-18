import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import axios from "axios";
import Tweets from "../components/Tweets";

function Home() {
  const [tweets, setTweets] = useState([]);
  const store = useSelector((store) => store);
  console.log("token", store);
  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/tweets/following/${store.user.id}`,
          headers: { Authorization: `Bearer ${store.user.accessToken}` },
        });
        setTweets(response.data.tweets);
        console.log(response.data.tweets);
      } catch (error) {
        console.log("hola", error);
      }
    };
    getTweets();
  }, []);

  console.log(store.user);
  console.log(store.tweets);
  return (
    <div className="home-wrapper">
      <div className="home-left-sidebar">
        <LeftSidebar />
      </div>
      <div className="home-center">
        <Tweets tweets={tweets} />
      </div>
      <div className="home-rigth-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
