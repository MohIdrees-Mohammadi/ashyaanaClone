import React from 'react'

import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gray-100/70 min-h-screen'>
        {/* header */}
        <Header />
        {/* outlet */}
        <Outlet />
        {/* footer */}
        <Footer />
    </div>
  )
}

export default Layout