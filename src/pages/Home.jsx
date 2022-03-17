import { useSelector } from "react-redux";
import "./Home.css";
import RightSidebar from "../components/RightSidebar";
import LeftSidebar from "../components/LeftSidebar";

function Home() {
  const store = useSelector((store) => store);
  console.log(store.user);
  console.log(store.tweets);
  return (
    <div className="home-wrapper">
      <div className="home-left-sidebar">
        <LeftSidebar />
      </div>
      <div className="home-center">center</div>
      <div className="home-rigth-sidebar">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Home;
