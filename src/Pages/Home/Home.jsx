import useTitle from "../../Hooks/useTitle";
import Categories from "../Tabs/Categories";
import BannerOne from "./BannerOne";
import ContactUs from "./ContactUs";
import Discover from "./Discover";
import Explore from "./Explore";
import Gallery from "./Gallery";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerOne></BannerOne>
      <Gallery></Gallery>
      <Categories></Categories>
      <Explore></Explore>
      <Discover></Discover>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
