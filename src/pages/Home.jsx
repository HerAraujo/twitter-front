import { useSelector } from "react-redux";
function Home() {
  const user = useSelector((store) => store.user);
  console.log(user);
  return <div>home</div>;
}

export default Home;
