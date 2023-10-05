import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";
import four from "/4.jpg";
import five from "/5.jpg";
import six from "/6.jpg";
import seven from "/7.jpg";
import eight from "/8.jpg";
import nine from "/9.jpg";
import "./styles.css";
import { useState } from "react";

const Gallery = () => {
  const [hoveredPicture, setHoveredPicture] = useState(null);

  const handlePictureHover = (PictureName) => {
    setHoveredPicture(PictureName);
  };

  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="3000"
      data-aos-anchor=".example-selector"
    >
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-semibold mb-4">
          Welcome to GameToys
        </h1>
        <p className=" text-center text-xl mb-6">
          Explore a world of video game toys and collectibles
        </p>

        <h2 className="text-xl  text-center font-bold mb-6">
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "1" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("1")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={one} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "2" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("2")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={two} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "3" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("3")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={three} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "4" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("4")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={four} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "5" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("5")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={five} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "6" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("6")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={six} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "7" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("7")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={seven} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "8" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("8")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={eight} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "9" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("9")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={nine} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "10" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("10")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={nine} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "11" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("11")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={nine} alt="" />
          </div>
          <div
            className={`bg-gray-200 h-48 skill-card ${
              hoveredPicture === "12" ? "hovered" : ""
            }`}
            onMouseEnter={() => handlePictureHover("12")}
            onMouseLeave={() => handlePictureHover(null)}
          >
            <img src={nine} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
