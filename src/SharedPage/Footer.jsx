import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-200 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={logo} alt="Website Logo" className="h-8 w-auto" />
            <span className="text-gray-800 text-lg font-bold ml-2 pb-1">
              GameToys
            </span>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold">Contact</span>
              <a
                href="tel:+123456789"
                className="text-gray-800 hover:text-blue-500"
              >
                Phone: +123456789
              </a>
              <a
                href="mailto:info@example.com"
                className="text-gray-800 hover:text-blue-500"
              >
                Email: info@example.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold">Social Media</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-500"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-500"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-blue-500"
              >
                Instagram
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-800 font-bold">Address</span>
              <span className="text-gray-800">123 Street, City, Country</span>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-gray-400" />
        <p className="text-center text-gray-800 mt-4">
          &copy; {new Date().getFullYear()} Website Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
