import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";

function PrivateRoute({ element: Home }) {
  const user = useSelector((state) => state.user);
  if (!user) {
    return <Navigate to="/" />;
  } else {
    return <Home />;
  }
}
export default PrivateRoute;
