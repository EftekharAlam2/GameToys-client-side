import user1 from "/user-1.png";
import user2 from "/user-2.png";
import user3 from "/user-3.png";

const Testimonials = () => {
  return (
    <div className="  text-black">
      <div className="text-center py-10">
        <h3 className="text-xl mb-3">Testimonials</h3>
        <h2 className="text-4xl w-96 mx-auto mb-5 font-semibold ">
          Read What Our Clients Has Say
        </h2>
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8 group">
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img src={user1} alt="" className="h-28 mx-auto" />
            <h4 className="uppercase text-xl font-bold">Alex Ramirez</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              As a passionate gamer, I am always on the lookout for unique and
              high-quality gaming collectibles. GameToys has become my ultimate
              destination for fulfilling my gaming cravings. The diverse
              selection, competitive prices, and hassle-free shopping experience
              keep me coming back for more. GameToys truly understands what
              gamers like me are looking for.
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img src={user2} alt="" className="h-28 mx-auto" />
            <h4 className="uppercase text-xl font-bold">Sarah Thompson</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              I am absolutely thrilled with the wide range of collectible game
              toys that GameToys offers. The quality and authenticity of the
              products exceeded my expectations. The customer service team was
              incredibly helpful in assisting me with my purchase, and the
              timely delivery made the whole experience even better. GameToys is
              my go-to store for all things gaming!
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
          <div className="bg-white p-8 rounded-xl duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer ">
            <img src={user3} alt="" className="h-28 mx-auto" />
            <h4 className="uppercase text-xl font-bold">Emily Carter</h4>
            <p className="text-sm leading-7 my-3 font-normal ">
              I stumbled upon GameToys while searching for a special gift for my
              brother, a dedicated gamer. The store&apos;s extensive collection
              of game-related merchandise amazed me, and the user-friendly
              website made it easy to find the perfect gift. The package arrived
              on time and was beautifully wrapped. My brother was overjoyed with
              the quality of the product. GameToys helped me make a memorable
              gift choice, and I highly recommend their exceptional services!
            </p>
            <button className="bg-blue-100 py-2.5 px-8 rounded-full">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
