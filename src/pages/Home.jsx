import { useSelector } from "react-redux";
function Home() {
  const store = useSelector((store) => store);
  console.log(store.user);
  console.log(store.tweets);
  return <div>home</div>;
}

export default Home;
