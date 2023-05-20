import { useContext } from "react";
import useTitle from "../../Hooks/useTitle";
import { Context } from "../../AuthProviders/Providers";
import Swal from "sweetalert2";

const AddToy = () => {
  useTitle("Add a Toy");
  const { user } = useContext(Context);

  const addToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const toyName = form.toyName.value;
    const photoURL = form.photoURL.value;
    const category = form.category.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toys = {
      name,
      email,
      toyName,
      photoURL,
      category,
      price,
      rating,
      quantity,
      description,
    };

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Toy Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 shadow-md my-5">
      <h2 className="text-3xl font-bold mb-6">Toy Form</h2>
      <form onSubmit={addToy}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user?.displayName}
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="toyName" className="block text-gray-700">
            Toy Name:
          </label>
          <input
            type="text"
            id="toyName"
            name="toyName"
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photoURL" className="block text-gray-700">
            Toy Photo URL:
          </label>
          <input
            type="text"
            id="photoURL"
            name="photoURL"
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">
            Category:
          </label>
          <select
            id="category"
            name="category"
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          >
            <option value="">Select Category</option>
            <option value="Action Figures">Action Figures</option>
            <option value="Plush Toys">Plush Toys</option>
            <option value="Construction Sets">Construction Sets</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700">
            Rating:
          </label>
          <input
            type="text"
            id="rating"
            name="rating"
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
            required
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4 bg-slate-100"
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline btn-warning text-white py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddToy;
