import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Login from "./Pages/User/Login";
import Registration from "./Pages/User/Registration";
import Providers from "./AuthProviders/Providers";
import "sweetalert2/dist/sweetalert2.css";
import AddToy from "./Pages/AddToy/AddToy";
import AllToys from "./Pages/AllToys/AllToys";
import ToyDetails from "./SharedPage/ToyDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import MyToy from "./Pages/MyToy/MyToy";
import UpdateToy from "./Pages/MyToy/UpdateToy";
import Blogs from "./Pages/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch(
            "https://b7a11-toy-marketplace-server-side-eftekhar-alam2.vercel.app/totalToys"
          ),
      },
      {
        path: "/toydetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-eftekhar-alam2.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToy></MyToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://b7a11-toy-marketplace-server-side-eftekhar-alam2.vercel.app/toys/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);
