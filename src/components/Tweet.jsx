import { useSelector } from "react-redux";
import Like from "./Like";
import "./Tweet.css";

function Tweet({ tweet }) {
  const user = useSelector((store) => store.user);

  return (
    <div className="row tweet-card p-4">
      <div className="col-xs-5 col-2 p-0">
        <img
          className="user-photo"
          src={tweet.author.profileImage}
          alt="user-photo"
        />
      </div>

      <div className="col-xs-7 col-10">
        <div className="d-flex justify-content-between">
          <div>
            <a
              className="text-decoration-none"
              href={`/${tweet.author.username}`}
            >
              <h3 className="d-inline-block fs-6 me-2 text-dark">
                {tweet.author.firstname} {tweet.author.lastname}
              </h3>
              <h3 className="d-inline-block text-muted fs-6">
                @{tweet.author.username}
              </h3>
            </a>
          </div>
          <div>
            {tweet.author.username === user?.username && (
              <form action={`/api/delete/${tweet.id}`} method="DELETE">
                <button
                  className="btn btn-outline-muted text-muted"
                  type="submit"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </form>
            )}
          </div>
        </div>
        <p className="text-start">{tweet.content}</p>
        <div className="d-flex justify-content-between">
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
            className="d-flex align-items-center justify-content-center icons comment"
          >
            <i className="fa-regular fa-comment"></i>
          </span>
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
            className="d-flex align-items-center justify-content-center icons retweet"
          >
            <i className="fa-solid fa-retweet"></i>
          </span>
          <Like tweet={tweet} user={user} />
          <span
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Lo sentimos, esta funcionalidad escapa del alcance de nuestro proyecto"
            className="d-flex align-items-center justify-content-center icons share"
          >
            <i className="fa-solid fa-arrow-up-from-bracket"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
