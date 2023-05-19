import three from "/3.jpg";

const Explore = () => {
  return (
    <section className="py-10">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="container mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2">
            <img src={three} alt="Video Game Toys" className="rounded-lg" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Unleash Your Imagination
            </h2>
            <p className="text-lg mb-6">
              Video game toys offer a gateway to endless adventures and
              imaginative play. Step into the shoes of your favorite characters,
              recreate epic battles, and embark on thrilling quests.
            </p>
            <p className="text-lg mb-6">
              Our collection features meticulously crafted toys that capture the
              essence of beloved video game franchises. Let your creativity soar
              as you build worlds and create your own narratives.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
