import React from 'react'
import logo from "../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { PiBuildingApartment } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  const [isHomeActive, setIsHomeActive] = React.useState(false)
  const [isListingActive, setIsListingActive] = React.useState(false)
  const [isAboutActive, setIsAboutActive] = React.useState(false)
  const [isContactActive, setIsContactActive] = React.useState(false)
  const navigate = useNavigate()



  return (
    <header className='bg-white/50 flex items-center justify-between  py-3.5 px-4 rounded-4xl shadow-sm fixed top-3 w-[95vw] lg:w-[60vw] left-3 sm:left-5   lg:left-65 xl:left-85'>
      <img src={logo} alt="logo"
        className='w-12 xl:w-15 rounded-[50%] border border-gray-100/80'
      />
      <nav className='hidden lg:flex  lg:items-center'>

        <NavLink
          to="/"
          className={({ isActive }) => {
            setIsHomeActive(isActive)

            return (
              isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-3.5 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-3.5 rounded-3xl gap-2"
            )
          }
          }>
          <FiHome color={isHomeActive ? "white" : "gray"} size={16} />
          <span className=' font-semibold text-[13px] lg:text-[16px]'>Home</span>
        </NavLink>

        <NavLink
          to="/listing"
          className={({ isActive }) => {
            setIsListingActive(isActive)

            return (
              isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-2 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-2 rounded-3xl gap-2"
            )
          }}>
          <PiBuildingApartment color={isListingActive ? "white" : "gray"} size={16} />
          <span className=' font-semibold text-[13px] lg:text-[16px]'>Listing</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => {
            setIsAboutActive(isActive)

            return (
              isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-2 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-2 rounded-3xl gap-2"
            )
          }}
        >
          <CiCircleInfo color={isAboutActive ? "white" : "gray"} size={16} />
          <span className=' font-semibold text-[13px] lg:text-[16px]'>About</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => {
            setIsContactActive(isActive)

            return (
              isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-2 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-2 rounded-3xl gap-2"
            )
          }}>
          <MdOutlineLocalPhone color={isContactActive ? "white" : "gray"} size={16} />
          <span className=' font-semibold text-[13px] lg:text-[16px]'>Contact</span>
        </NavLink>



      </nav>

      <button
        onClick={() => navigate("/login")}
        className='hidden cursor-pointer lg:block bg-indigo-600 text-[13px] lg:text-[16px]  px-5 py-2 rounded-3xl text-gray-100 font-semibold'>Login</button>

      <div className='mr-3 flex lg:hidden p-2.5 border border-gray-300 cursor-pointer hover:bg-gray-100 bg-gray-200 rounded-[10px]'>

        <Sheet>
          <SheetTrigger>
            <div>
              <RxHamburgerMenu size={15} />
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <nav className='flex flex-col h-[800px] mt-10 lg:hidden lg:items-center'>

                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    setIsHomeActive(isActive)

                    return (
                      isActive ? "flex  text-gray-100 items-center bg-indigo-600 px-4   py-3.5  rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-3.5 rounded-3xl gap-2"
                    )
                  }
                  }>
                  <FiHome color={isHomeActive ? "white" : "gray"} size={16} />
                  <span className=' font-semibold text-[13px] lg:text-[16px]'>Home</span>
                </NavLink>

                <NavLink
                  to="/listing"
                  className={({ isActive }) => {
                    setIsListingActive(isActive)

                    return (
                      isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-2 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-3.5 rounded-3xl gap-2"
                    )
                  }}>
                  <PiBuildingApartment color={isListingActive ? "white" : "gray"} size={16} />
                  <span className=' font-semibold text-[13px] lg:text-[16px]'>Listing</span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) => {
                    setIsAboutActive(isActive)

                    return (
                      isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-3.5 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-3.5 rounded-3xl gap-2"
                    )
                  }}
                >
                  <CiCircleInfo color={isAboutActive ? "white" : "gray"} size={16} />
                  <span className=' font-semibold text-[13px] lg:text-[16px]'>About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) => {
                    setIsContactActive(isActive)

                    return (
                      isActive ? "flex text-gray-100 items-center bg-indigo-600 px-4 xl:px-5  py-3.5 xl:py-3.5 rounded-3xl gap-2" : "flex text-gray-500 items-center  px-5 py-3.5 rounded-3xl gap-2"
                    )
                  }}>
                  <MdOutlineLocalPhone color={isContactActive ? "white" : "gray"} size={16} />
                  <span className=' font-semibold text-[13px] lg:text-[16px]'>Contact</span>
                </NavLink>



              </nav>
              <button
                onClick={() => navigate("/login")}
                className='lg:hidden cursor-pointer flex justify-center bg-indigo-600 text-[13px] lg:text-[16px]  px-5 py-2 rounded-3xl text-gray-100 font-semibold'>Login</button>


            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default Header