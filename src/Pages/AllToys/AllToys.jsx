import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
  useTitle("All Toy");
  const toys = useLoaderData();

  return (
    <div className="max-w-4xl my-10 mx-auto">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4">Seller Name</th>
            <th className="py-2 px-4">Toy Name</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Quantity</th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy) => (
            <tr key={toy._id} className="border-t">
              <td className="py-2 px-4">{toy.name}</td>
              <td className="py-2 px-4">{toy.toyName}</td>
              <td className="py-2 px-4">{toy.category}</td>
              <td className="py-2 px-4">{toy.price}</td>
              <td className="py-2 px-4">{toy.quantity}</td>
              <td className="py-2 px-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
