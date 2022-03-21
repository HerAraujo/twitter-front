import UserPill from "./UserPill";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import CreateTweet from "./CreateTweet";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function LeftSidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = useSelector((store) => store.user);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Not Avaible
    </Tooltip>
  );
  return (
    <div className="left-sidebar d-none d-sm-flex flex-column justify-content-between align-items-start p-3 position-fixed h-100">
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
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                      Explore
                    </span>
                  </OverlayTrigger>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-bell"></i>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                      Notifications
                    </span>
                  </OverlayTrigger>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-inbox"></i>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                      Messages
                    </span>
                  </OverlayTrigger>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <h3
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-bookmark"></i>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                      Bookmarks
                    </span>
                  </OverlayTrigger>
                </h3>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <span>
                  <i className="navbar-icon fas fa-list-alt"></i>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                      Lists
                    </span>
                  </OverlayTrigger>
                </span>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start align-items-center">
                <Link to={`/${user?.username}`}>
                  <i className="navbar-icon fas fa-user"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal ms-2">
                    Profile
                  </span>
                </Link>
              </h3>
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
          <div className="align-self-end position-relative">
            <UserPill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
