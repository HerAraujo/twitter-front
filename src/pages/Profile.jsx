import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Tweets from "../components/Tweets";
import NotFound from "./NotFound";

function Profile() {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState(null);
  const [follow, setFollow] = useState("");
  const loggedUser = useSelector((store) => store.user);
  let params = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios({
          url: `http://localhost:8000/api/users/${params.username}`,
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
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

  return (
    <div>
      {user && (
        <div className="container">
          <div className="row">
            <div className="col-3  d-flex flex-column  align-items-end">
              <LeftSidebar />
            </div>

            <div className="col-12 col-sm-9 col-lg-6">
              <div class="row tweet-card d-flex">
                <div class="profile-image-background"></div>

                <div class="d-flex flex-column">
                  <div class="d-flex justify-content-between align-items-start">
                    <img
                      class="col-3 user-profile-photo"
                      src={user.profileImage}
                      alt="profile photo"
                    />

                    <a href="#"></a>

                    <button
                      type="submit"
                      class="btn btn-dark rounded-pill mt-2"
                    >
                      Unfollow
                    </button>

                    <button
                      type="submit"
                      class="btn btn-dark rounded-pill mt-2"
                    >
                      Follow
                    </button>

                    <a href="#">
                      <button class="btn btn-dark rounded-pill mt-2">
                        Edit profile
                      </button>
                    </a>
                  </div>
                  <div id="profile-data">
                    <h2 class="d-block fs-4 me-2 text-dark fw-bold words-distance">
                      {user.firstname} {user.lastname}
                    </h2>
                    <h3 class="d-block text-muted fs-6 words-distance">
                      @{user.username}
                    </h3>
                    <p class="mt-4 words-distance">
                      Frase que elige el usuario
                    </p>
                    <p class="text-muted">
                      <i class="fa-solid fa-calendar-days text-muted words-distance"></i>{" "}
                      Joined February 2022
                    </p>
                    <div class="d-sm-flex words-distance">
                      <p class="me-3">
                        <span class="fw-bold">{user.following.length}</span>
                        <span class="text-muted">Following</span>
                      </p>
                      <p>
                        <span class="fw-bold">{user.followers.length}</span>
                        <span class="text-muted">Followers</span>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <a class="col-3 text-center profile-btn btn btn-outline">
                      Tweets
                    </a>
                    <a
                      class="col-4 text-center profile-btn btn btn-outline"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      Tweets & replies
                    </a>
                    <a
                      class="col-2 text-center profile-btn btn btn-outline"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      Media
                    </a>
                    <a
                      class="col-3 text-center btn btn-outline profile-btn"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                    >
                      <div>Likes</div>
                    </a>
                  </div>
                </div>
              </div>
              <Tweets tweets={tweets} />
            </div>

            <div className="col-lg-3 d-none d-lg-inline-block right-sidebar">
              <RightSidebar />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
