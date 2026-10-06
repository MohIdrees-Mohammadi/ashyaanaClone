import React from 'react'
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



const Home = () => {
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

    </section>
  )
}

export default Home