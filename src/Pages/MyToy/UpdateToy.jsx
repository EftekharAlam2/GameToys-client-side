import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const UpdateToy = () => {
  useTitle("Update Toy");

  const toy = useLoaderData();
  const { _id, price, quantity, description } = toy;

  const updateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = parseInt(form.price.value);
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      price,
      quantity,
      description,
    };

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md my-5">
      <h2 className="text-3xl font-bold mb-6">Toy Form</h2>
      <form onSubmit={updateToy}>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            defaultValue={price}
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700">
            Available Quantity:
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            defaultValue={quantity}
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Details Description:
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={description}
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-warning text-white py-2 px-4 rounded-lg"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateToy;
