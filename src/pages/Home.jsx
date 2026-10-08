import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Search } from 'lucide-react';
import CustomerSelect from '@/components/CustomerSelect'


const Home = () => {
  const [active, setActive] = useState(true)
  const property = [
    { label: "LightP", value: "lightP" },
    { label: "DarkP", value: "darkP" },
    { label: "SystemP", value: "systemP" },
  ]
  const propertyOperation = [
    { label: "Lightp", value: "lightp" },
    { label: "Darkp", value: "darkp" },
    { label: "Systemp", value: "systemp" },
  ]
  const vehicle = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ]
  const vehicleOperation = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "System", value: "system" },
  ]
  return (
    <section className='relative mx-40 '>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className='h-140 rounded-3xl overflow-hidden'>
              <img className='w-full' src="https://images.unsplash.com/photo-1778016740636-5ef0aaab1e97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


              {/* title of the carousal */}
              <div className='animate-wiggle absolute top-[35%] left-[25%] flex flex-col gap-3  '>
                <h1 className='font-semibold text-white text-4xl'>Modern Living in the Heart of the City</h1>
                <p className='text-white text-center text-xl'>Experience luxury living amidst nature</p>
              </div>

            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='h-140 relative rounded-3xl overflow-hidden'>
              <img className='w-full' src="https://plus.unsplash.com/premium_photo-1784462433921-ee73385b6f91?q=80&w=1067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              {/* title of the carousal */}
              <div className='animate-wiggle absolute top-[35%] left-[25%] flex flex-col gap-3  '>
                <h1 className='font-semibold text-white text-4xl'>Modern Living in the Heart of the City</h1>
                <p className='text-white text-center text-xl'>Experience luxury living amidst nature</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className='h-140 relative rounded-3xl overflow-hidden'>
              <img className='w-full' src="https://images.unsplash.com/photo-1778016740636-5ef0aaab1e97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              {/* title of the carousal */}
              <div className='animate-wiggle absolute top-[35%] left-[25%] flex flex-col gap-3  '>
                <h1 className='font-semibold text-white text-4xl'>Modern Living in the Heart of the City</h1>
                <p className='text-white text-center text-xl'>Experience luxury living amidst nature</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* stats of the products */}
      <div className=' absolute top-8 left-15 flex gap-3 bg-white/25 px-5 py-2 border border-gray-200 rounded-xl '>
        <span className='font-semibold text-white '>250+</span>
        <p className='text-white'>new listings this week</p>
      </div>

      <div className=' w-full absolute top-[55%] flex flex-col items-center justify-center'>
        <div className=' flex gap-3 mb-3'>
          <button onClick={() => setActive(true)} className={active ? 'px-4 py-1.5 rounded-xl text-gray-300 font-semibold bg-indigo-600 cursor-pointer' : 'px-4 py-1.5 rounded-xl text-gray-300 font-semibold bg-gray-200/10 cursor-pointer'}>Vehicle</button>
          <button onClick={() => setActive(false)} className={active ? 'px-4 py-1.5 rounded-xl text-gray-300 font-semibold bg-gray-200/10 cursor-pointer' : 'px-4 py-1.5 rounded-xl text-gray-300 font-semibold bg-indigo-600 cursor-pointer'}>Property</button>
        </div>
        <input className='bg-gray-200/80 py-4 px-13 rounded-3xl w-[60%]' type="text" placeholder={active ? "Vehicle" : "Property"} />
        <Search size={22} className='text-indigo-600 absolute top-[63%] left-[21.5%]' />
        {/* filters */}
        <div className='flex gap-3 absolute top-[59%] left-[50%]'>
          {
            active ? (
              <>
                <CustomerSelect items={vehicle} placeholder="Vehicle" />
                <CustomerSelect items={vehicleOperation} placeholder="Operation" />
              </>
            ) : (
              <>
                <CustomerSelect items={property} placeholder="Property" />
                <CustomerSelect items={propertyOperation} placeholder="Operation" />
              </>
            )
          }


        </div>
      </div>

    </section >
  )
}

export default Home