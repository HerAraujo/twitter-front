import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";
import axios from "axios";
import Tweets from "../components/Tweets";
import CreateTweet from "../components/CreateTweet";
import { updateTweets } from "../store/actions";
import BottomNavbar from "../components/BottomNavbar";

function Home() {
  const [tweets, setTweets] = useState([]);
  const store = useSelector((store) => store);
  const updatedTweets = useSelector((store) => store.tweets);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTweets = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/tweets/following/${store.user.id}`,
          headers: { Authorization: `Bearer ${store.user.accessToken}` },
        });
        setTweets(response.data.tweets);
      } catch (error) {
        console.log(error);
      }
    };
    getTweets();
  }, []);
  useEffect(() => dispatch(updateTweets(tweets)), [tweets]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3  d-flex flex-column  align-items-end">
          <LeftSidebar />
        </div>
        <div className="col-12 col-sm-9 col-lg-6">
          <CreateTweet />
          <Tweets tweets={updatedTweets} />
        </div>
        <div className="col-lg-3 d-none d-lg-inline-block right-sidebar">
          <RightSidebar />
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
}

export default Home;
