import useTitle from "../../Hooks/useTitle";
import Banner from "./Banner";
import Discover from "./Discover";
import Gallery from "./Gallery";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Discover></Discover>
    </div>
  );
};

export default Home;
