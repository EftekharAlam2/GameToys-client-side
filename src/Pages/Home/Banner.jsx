const Banner = () => {
  return (
    <section
      data-aos="flip-left"
      data-aos-delay="100"
      data-aos-anchor=".example-selector"
      className="bg-blue-600 py-10"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-bold mb-4">
          Welcome to GameToys
        </h1>
        <p className="text-white text-lg mb-6">
          Explore a world of video game toys and collectibles
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Banner;
