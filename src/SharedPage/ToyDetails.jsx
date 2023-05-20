import { useLoaderData } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const ToyDetails = () => {
  useTitle("Toy Details");
  const toy = useLoaderData();

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-4">
      <div className="flex items-center mb-6">
        <img
          src={toy.photoURL}
          alt="Toy Photo"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-bold">{toy.toyName}</h2>
          <p className="text-gray-500">{toy.name}</p>
        </div>
      </div>
      <div className="mb-6">
        <p className="text-gray-600">
          <span className="font-bold">Email:</span> {toy.email}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Price:</span> {toy.price}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Rating:</span> {toy.rating}
        </p>
        <p className="text-gray-600">
          <span className="font-bold">Available Quantity:</span> {toy.quantity}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p className="text-gray-600">{toy.description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
