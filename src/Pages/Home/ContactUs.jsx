const ContactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="bg-white  rounded-lg p-8"
      >
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <form className="space-y-6 text-lg">
          <div>
            <input
              type="text"
              name="from_name"
              id="name"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <input
              type="email"
              name="from_email"
              id="email"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <textarea
            id="message"
            name="message"
            className="border border-gray-300 rounded-lg py-2 px-4 w-full h-32 resize-none focus:outline-none focus:border-indigo-500"
            placeholder="Your Message"
          ></textarea>
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-md w-full"
            type="submit"
            value="Send"
          >
            Send Message
          </button>
        </form>
      </div>
      <div data-aos="zoom-in" data-aos-duration="3000" className="py-3">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=723&amp;height=559&amp;hl=en&amp;q=Monafeer mor, Rajshahi, Bangladesh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://connectionsgame.org/">Connections NYT</a>
          </div>
          <style>
            {`.mapouter{position:relative;text-align:right;width:100%;height:559px;}.gmap_canvas{overflow:hidden;background:none!important;width:100%;height:559px;}.gmap_iframe{height:559px!important;}`}
          </style>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
