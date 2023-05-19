import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold mb-6">Registration</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
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
              className="w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full"
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
