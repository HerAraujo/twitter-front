import UserPill from "./UserPill";
import "./LeftSidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import CreateTweet from "./CreateTweet";

function LeftSidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((store) => store.user);
  return (
    <div className="left-sidebar d-none d-sm-flex flex-column justify-content-between align-items-start p-3 position-fixed">
      <div className="row h-100">
        <div className="col d-flex flex-column justify-content-between">
          <div>
            <div className="px-3">
              <div className="px-4 logo d-flex justify-content-center align-items-center">
                <Link
                  to={"/home"}
                  className="text-decoration-none d-flex justify-content-center align-items-center"
                >
                  <i className="fab fa-twitter fa-2xl"></i>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <Link className="text-decoration-none" to={"/home"}>
                  <i className="navbar-icon fas fa-home"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Home
                  </span>
                </Link>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-hashtag"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Explore
                  </span>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-bell"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Notifications
                  </span>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-inbox"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Messages
                  </span>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-bookmark"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Bookmarks
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-list-alt"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Lists
                  </span>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start align-items-center">
                <Link to={`/${user.username}`}>
                  <i className="navbar-icon fas fa-user"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Profile
                  </span>
                </Link>
              </h3>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <button
              className="btn btn-primary rounded-pill"
              id="new-tweet"
              onClick={handleShow}
            >
              Tweet
            </button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <div className="d-flex justify-content-end m-2">
              <i
                className="fa-solid fa-xmark cursor-pointer"
                onClick={handleClose}
              ></i>
            </div>
            <CreateTweet handleClose={handleClose} />
          </Modal>
          <div>
            <UserPill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
