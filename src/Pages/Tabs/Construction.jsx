import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Construction = () => {
  const [toysData, setToysData] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-eftekhar-alam2.vercel.app/toys",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const constructionToys = data.filter(
          (toy) => toy.category === "Construction Sets"
        );
        setToysData(constructionToys);
      });
  }, []);

  return (
    <div
      className="max-w-7xl my-10 mx-auto"
      data-aos="flip-left"
      data-aos-delay="800"
      data-aos-anchor=".example-selector"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toysData.map((toy) => (
          <div key={toy._id} className="bg-white rounded-lg shadow-md">
            <img
              src={toy.photoURL}
              alt="Photo Name"
              className="h-96 w-full object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{toy.toyName}</h3>
              <p className="text-gray-700 mb-2">Price: ${toy.price}</p>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">
                  Rating: {toy.rating}
                </span>
              </div>
              <Link to={`/toydetails/${toy._id}`}>
                <button className="btn btn-outline btn-success text-white py-2 px-4 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Construction;
