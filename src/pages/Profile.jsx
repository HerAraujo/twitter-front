import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Tweets from "../components/Tweets";
import NotFound from "./NotFound";
import { updateTweets } from "../store/actions";
import BottomNavbar from "../components/BottomNavbar";

function Profile() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);
  const [follow, setFollow] = useState("follow");
  const loggedUser = useSelector((store) => store.user);
  const updatedTweets = useSelector((store) => store.tweets);
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/users/${params.username}`,
        });
        setUser(response.data);
      } catch (error) {
        console.log("error", error);
        <NotFound />;
      }
    };
    const getTweets = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/tweets/${params.username}`,
        });

        setTweets(response.data.tweets);
      } catch (error) {
        console.log(error);
      }
    };

    getTweets();
    getUser();
  }, []);

  useEffect(() => dispatch(updateTweets(tweets)), [tweets]);

  const handleFollow = () => {
    if (user.followers.includes(loggedUser.id)) {
      setFollow("Follow");
    } else {
      setFollow("Unfollow");
    }
    return follow;
  };

  return (
    <div>
      {user && (
        <div className="container">
          <div className="row">
            <div className="col-3  d-flex flex-column  align-items-end">
              <LeftSidebar />
            </div>

            <div className="col-12 col-sm-9 col-lg-6">
              <div className="row tweet-card d-flex">
                <div className="profile-image-background"></div>

                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start">
                    <img
                      className="col-3 user-profile-photo"
                      src={user.profileImage}
                      alt="profile photo"
                    />
                    {loggedUser.username === params.username ? (
                      <button className="btn btn-dark rounded-pill mt-2">
                        Edit profile
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-dark rounded-pill mt-2"
                      >
                        {user.followers.includes(loggedUser.id)
                          ? "Unfollow"
                          : "Follow"}
                      </button>
                    )}
                  </div>
                  <div id="profile-data">
                    <h2 className="text-start d-block fs-4 me-2 text-dark fw-bold words-distance">
                      {user.firstname} {user.lastname}
                    </h2>
                    <h3 className="text-start d-block text-muted fs-6 words-distance">
                      @{user.username}
                    </h3>
                    <p className="text-start mt-4 words-distance">
                      Frase que elige el usuario
                    </p>
                    <p className="text-muted text-start">
                      <i className="fa-solid fa-calendar-days text-muted words-distance"></i>{" "}
                      Joined February 2022
                    </p>
                    <div className="d-sm-flex words-distance">
                      <p className="me-3">
                        <span className="fw-bold me-1">
                          {user.following.length}
                        </span>
                        <span className="text-muted">Following</span>
                      </p>
                      <p>
                        <span className="fw-bold me-1">
                          {user.followers.length}
                        </span>
                        <span className="text-muted">Followers</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <a className="col-3 text-center profile-btn btn btn-outline">
                      Tweets
                    </a>
                    <a
                      className="col-4 text-center profile-btn btn btn-outline"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      Tweets & replies
                    </a>
                    <a
                      className="col-2 text-center profile-btn btn btn-outline"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      Media
                    </a>
                    <a
                      className="col-3 text-center btn btn-outline profile-btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      <div>Likes</div>
                    </a>
                  </div>
                </div>
              </div>
              <Tweets tweets={updatedTweets} />
            </div>

            <div className="col-lg-3 d-none d-lg-inline-block right-sidebar">
              <RightSidebar />
            </div>
          </div>
          <BottomNavbar />
        </div>
      )}
    </div>
  );
}

export default Profile;
