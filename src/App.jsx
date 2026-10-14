import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Test from "./pages/Test";
import DashboardLayout from "./pages/DashobardLayout";
import Apartements from "./pages/Apartements";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/listing",
          element: <h1>Listing</h1>,
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>,
        },
        {
          path: "/allApartements",
          element: <h2>All Apartements are here</h2>,
        },
        {
          path: "/apartements",
          element: <Apartements />,
        },
        {
          path: "/office",
          element: <h1>Find your dream Office</h1>,
        },
        {
          path: "/land",
          element: <h1>Find any size of Lands</h1>,
        },
        {
          path: "/warehouse",
          element: <h1>You can find your dream Warehouses here</h1>,
        },
        {
          path: "/commercial",
          element: <h1>Register your commercials here</h1>,
        },
        {
          path: "/allCars",
          element: <h1>Find your dream cars here</h1>,
        },
        {
          path: "/sendan",
          element: <h1>You can find any model of sedan here</h1>,
        },
        {
          path: "/suv",
          element: <h1>Best SUV ever</h1>,
        },
        {
          path: "/truck",
          element: <h1>Best Trucks which can carry heavy bars</h1>,
        },
        {
          path: "/motorcycle",
          element: <h1>Motorcycles</h1>,
        },
        {
          path: "/heavy",
          element: <h1>heavy</h1>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Test />,
        },
        {
          path: "/dashboard/profile",
          element: <h1>Hello World!</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
