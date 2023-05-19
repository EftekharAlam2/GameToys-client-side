import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { useContext } from "react";
import { Context } from "../../AuthProviders/Providers";
import Swal from "sweetalert2";

const Registration = () => {
  useTitle("Register");

  const { createUser, updateUser } = useContext(Context);

  const registerButton = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    const photo = event.target.photo.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Please add at least 6 characters in password!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const registerUser = result.user;
        updateUser(registerUser, name, photo)
          .then(() => {})
          .catch((error) => {
            console.log(error.message);
          });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Registration Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        event.target.reset();
      })
      .catch(() => {});
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6">Registration</h2>
        <form className="w-full max-w-sm" onSubmit={registerButton}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block text-gray-700 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photo"
              className="w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-warning text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            Register
          </button>
        </form>
        <p className="mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
