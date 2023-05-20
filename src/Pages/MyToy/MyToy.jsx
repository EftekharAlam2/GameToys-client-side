import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../AuthProviders/Providers";

const MyToy = () => {
  useTitle("My Toys");
  const [toysData, setToysData] = useState([]);

  const { user } = useContext(Context);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/email/${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setToysData(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = toysData.filter((toys) => toys._id !== id);
            setToysData(remaining);
          }
        });
    }
  };

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
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {toysData.map((toy) => (
            <tr key={toy._id} className="border-t">
              <td className="py-2 px-4">{toy.name}</td>
              <td className="py-2 px-4">{toy.toyName}</td>
              <td className="py-2 px-4">{toy.category}</td>
              <td className="py-2 px-4">{toy.price}</td>
              <td className="py-2 px-4">{toy.quantity}</td>
              <td className="py-2 px-4">
                <Link to={`/toydetails/${toy._id}`}>
                  <button className="btn btn-outline btn-warning text-white py-2 px-4 rounded-lg">
                    View Details
                  </button>
                </Link>
              </td>
              <td className="py-2 px-4">
                <Link to={`/updatetoy/${toy._id}`}>
                  <button className="btn btn-outline btn-success text-white py-2 px-4 rounded-lg">
                    Update
                  </button>
                </Link>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDelete(toy._id)}
                  className="btn btn-outline btn-error text-white py-2 px-4 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToy;
