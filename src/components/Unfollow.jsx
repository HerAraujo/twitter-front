import axios from "axios";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

function Unfollow() {
  const store = useSelector((store) => store);
  const params = useParams();

  const handleClick = async () => {
    try {
      const response = await axios({
        url: `${process.env.REACT_APP_URL}api/users/${params.username}`,
      });

      await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_URL}api/users/follow/${response.data._id}`,
        headers: { Authorization: `Bearer ${store.user.accessToken}` },
      });
    } catch (error) {
      return alert("Sorry something went wrong, please try again later");
    }
  };

  return (
    <div>
      <span
        onClick={() => {
          handleClick();
        }}
      >
        Unfollow
      </span>
    </div>
  );
}

export default Unfollow;
