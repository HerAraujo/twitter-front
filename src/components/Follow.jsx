import axios from "axios";
import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";

function Follow() {
  const store = useSelector((store) => store);
  const params = useParams();

  const handleClick = async () => {
    try {
      const response = await axios({
        url: `http://localhost:8000/api/users/${params.username}`,
      });

      const makeFollow = await axios({
        method: "POST",
        url: `http://localhost:8000/api/users/follow/${response.data._id}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
    } catch (error) {
      console.log(error);
      <NotFound />;
    }
  };

  return (
    <div>
      <span
        onClick={() => {
          handleClick();
        }}
      >
        Follow
      </span>
    </div>
  );
}

export default Follow;