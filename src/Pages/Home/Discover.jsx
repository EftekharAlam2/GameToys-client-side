import five from "/5.jpg";

const Discover = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Discover the Magic of Video Game Toys
            </h2>
            <p className="text-lg mb-6">
              Immerse yourself in the world of video game toys and collectibles.
              From action figures to plush toys, we have a wide range of
              merchandise that celebrates your favorite video games.
            </p>
            <p className="text-lg mb-6">
              Whether you are a casual fan or a hardcore collector, our curated
              collection is sure to delight you. Explore the characters, iconic
              moments, and artistry that make video game toys so special.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={five} alt="Video Game Toys" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
