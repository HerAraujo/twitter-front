import "./LogoutModal.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function LogoutModal() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handlerClick = () => {
    const action = {
      type: "LOGOUT",
    };
    navigate("/");
    dispatch(action);
  };
  return (
    <div className="logout-modal shadow">
      <div className="logout-modal-content">
        <button
          className="btn btn-primary"
          onClick={() => {
            handlerClick();
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default LogoutModal;
