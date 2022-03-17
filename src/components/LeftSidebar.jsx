import UserPill from "./UserPill";
import "./LeftSidebar.css";

function LeftSidebar() {
  return (
    <div className="left-sidebar d-none d-sm-flex flex-column justify-content-between align-items-start p-3 position-fixed">
      <div className="row h-100">
        <div className="col d-flex flex-column justify-content-between">
          <div>
            <div className="px-3">
              <div className="px-4 logo d-flex justify-content-center align-items-center">
                <a
                  className="text-decoration-none d-flex justify-content-center align-items-center"
                  href="/home"
                >
                  <i className="fab fa-twitter fa-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a className="text-decoration-none" href="/home">
                  <i className="navbar-icon fas fa-home"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Home{" "}
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-hashtag"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Explore{" "}
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-bell"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Notifications{" "}
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-inbox"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Messages
                  </span>
                </a>
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
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Bookmarks{" "}
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start">
                <a
                  className="text-decoration-none"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
                  href=""
                >
                  <i className="navbar-icon fas fa-list-alt"></i>
                  <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                    {" "}
                    Lists{" "}
                  </span>
                </a>
              </h3>

              <h3 className="navbar-links rounded-pill px-4 py-2 d-flex justify-content-start align-items-center">
                <i className="navbar-icon fas fa-user"></i>
                <span className="d-none d-xl-inline-block text-dark fs-5 fw-normal">
                  {" "}
                  Profile{" "}
                </span>
              </h3>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-end">
            <div className="btn-group dropup px-2">
              image
              <ul className="dropdown-menu border-0 shadow">
                <li className="text-center">
                  <a className="text-decoration-none" href="/logout">
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
            <button className="btn btn-primary rounded-pill" id="new-tweet">
              Tweet
            </button>
          </div>
          <div className="l-sidebar-user">
            <UserPill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
