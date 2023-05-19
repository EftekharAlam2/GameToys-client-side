import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-200">
      <div className="bg-white rounded-lg shadow-md my-10 p-8">
        <h2 className="text-3xl font-bold mb-6">LOG IN</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full rounded-lg py-2 px-4 border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline btn-warning text-white font-bold py-2 px-4 rounded-lg w-full"
          >
            LogIn
          </button>
        </form>
        <div className="mt-6">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg w-full">
            Sign in with Google
          </button>
        </div>
        <p className="mt-6 text-center">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
