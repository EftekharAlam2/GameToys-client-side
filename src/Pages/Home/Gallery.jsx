import one from "/1.jpg";
import two from "/2.jpg";
import three from "/3.jpg";
import four from "/4.jpg";
import five from "/5.jpg";
import six from "/6.jpg";
import seven from "/7.jpg";
import eight from "/8.jpg";
import nine from "/9.jpg";

const Gallery = () => {
  return (
    <section className="py-10">
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
        className="container mx-auto"
      >
        <h2 className="text-3xl text-center font-bold mb-6">
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 h-48">
            <img src={one} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={two} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={three} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={four} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={five} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={six} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={seven} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={eight} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={nine} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={nine} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={nine} alt="" />
          </div>
          <div className="bg-gray-200 h-48">
            <img src={nine} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
