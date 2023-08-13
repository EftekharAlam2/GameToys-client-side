import useTitle from "../../Hooks/useTitle";
import Categories from "../Tabs/Categories";
import BannerOne from "./BannerOne";
import ContactUs from "./ContactUs";
import Discover from "./Discover";
import Explore from "./Explore";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <BannerOne></BannerOne>
      <Gallery></Gallery>
      <Categories></Categories>
      <Explore></Explore>
      <Discover></Discover>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
