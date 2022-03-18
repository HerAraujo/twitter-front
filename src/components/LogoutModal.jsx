import "./LogoutModal.css";
import { useDispatch } from "react-redux";
import store from "../store/store";
function LogoutModal() {
  const dispatch = useDispatch();
  const handlerClick = () => {
    const action = {
      type: "LOGOUT",
    };
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
