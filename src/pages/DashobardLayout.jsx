import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex gap-10'>
        <div className='w-40 bg-amber-500 h-screen'>
            <h1>Dashboard</h1>
        </div>
        {/* outlet */}
        <Outlet />
        
    </div>
  )
}

export default DashboardLayout