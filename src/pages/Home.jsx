import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <div className='flex justify-between'>
        <Link to="/about">Click to open about page</Link>
      <Button variant="default">Button</Button>
      </div>
    </div>
  )
}

export default Home