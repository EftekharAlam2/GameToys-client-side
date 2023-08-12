import banner1 from "/banner1.jpg"; // Make sure to provide the correct path

const BannerOne = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <img
        src={banner1}
        alt="Banner Image"
        className="max-w-full h-auto  md:max-w-md lg:max-w-lg xl:max-w-5xl"
        data-aos="fade-up"
        data-aos-duration="2000"
      />
    </div>
  );
};

export default BannerOne;
