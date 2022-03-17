import "./LogoutModal.css";

function LogoutModal() {
  const handlerClick = () => {
    window.alert("log out");
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
