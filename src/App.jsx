import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from "./pages/Home"
import About from "./pages/About"
import Layout from './pages/Layout'
import Login from "./pages/Login"
import Test from "./pages/Test"
import DashboardLayout from "./pages/DashobardLayout"

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/listing",
          element: <h1>Listing</h1>
        },
        {
          path: "/contact",
          element: <h1>Contact</h1>
        },


    ]},
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Test />
        },
        {
          path: "/dashboard/profile",
          element: <h1>Hello World!</h1>
        }
      ]
    }

  ])


  return (
    <RouterProvider router={routes} />
  )
}

export default App