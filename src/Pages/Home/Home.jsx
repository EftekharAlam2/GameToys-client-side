import useTitle from "../../Hooks/useTitle";
import Categories from "../Tabs/Categories";
import Banner from "./Banner";
import BannerOne from "./BannerOne";
import Discover from "./Discover";
import Explore from "./Explore";
import Gallery from "./Gallery";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerOne></BannerOne>
      <Banner></Banner>
      <Gallery></Gallery>
      <Categories></Categories>
      <Explore></Explore>
      <Discover></Discover>
    </div>
  );
};

export default Home;
