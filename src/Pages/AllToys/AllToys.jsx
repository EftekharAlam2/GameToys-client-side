import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useEffect, useState } from "react";

const AllToys = () => {
  useTitle("All Toy");

  const data = useLoaderData();
  const currentToys = data.totalToys;

  const [currentPage, setCurrentPage] = useState(0);
  const [toys, setToysData] = useState([]);

  const itemsPerPage = 20;
  const totalPages = Math.ceil(currentToys / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://b7a11-toy-marketplace-server-side-eftekhar-alam2.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`
      );
      const data = await response.json();
      setToysData(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="max-w-4xl my-10 mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by toy name"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4"
          />
        </div>
        <div className="overflow-x-auto">
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
              {filteredToys.map((toy) => (
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center mb-4 pt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className="btn btn-outline btn-warning border rounded-md py-1 px-5 mx-1"
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default AllToys;
