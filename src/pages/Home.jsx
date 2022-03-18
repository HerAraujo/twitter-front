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
    <div className="container">
      <div className="row">
        <div className="col-3  d-flex flex-column  align-items-end">
          <LeftSidebar />
        </div>
        <div className="col-12 col-sm-9 col-lg-6">
          <Tweets tweets={tweets} />
        </div>
        <div className="col-lg-3 d-none d-lg-inline-block right-sidebar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Home;
