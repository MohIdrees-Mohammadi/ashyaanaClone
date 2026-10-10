import React from "react";
import logo from "../assets/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";
import { FiHome } from "react-icons/fi";
import { PiBuildingApartment } from "react-icons/pi";
import { CiCircleInfo } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

import { NavLink, useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/",
      name: "Home",
      icon: FiHome,
    },
    {
      path: "/listing",
      name: "Listing",
      icon: PiBuildingApartment,
    },
    {
      path: "/about",
      name: "About",
      icon: CiCircleInfo,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: MdOutlineLocalPhone,
    },
  ];

  return (
    <header className="fixed left-3 top-3 z-50 flex w-[95vw] items-center justify-between rounded-4xl bg-white/50 px-4 py-3.5 shadow-sm backdrop-blur-md sm:left-5 lg:left-65 lg:w-[60vw] xl:left-65">

      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-12 rounded-[50%] border border-gray-100/80 xl:w-15"
      />

      {/* Desktop Navigation */}
      <nav className="hidden items-center lg:flex">

        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center gap-2 rounded-3xl bg-indigo-600 px-4 py-3.5 text-gray-100 xl:px-5 xl:py-2"
                  : "flex items-center gap-2 rounded-3xl px-5 py-2 text-gray-500"
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    color={isActive ? "white" : "gray"}
                    size={16}
                  />

                  <span className="text-[13px] font-semibold lg:text-[16px]">
                    {item.name}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}

      </nav>

      {/* Desktop Login */}
      <button
        onClick={() => navigate("/login")}
        className="hidden cursor-pointer rounded-3xl bg-indigo-600 px-5 py-2 text-[13px] font-semibold text-gray-100 lg:block lg:text-[16px]"
      >
        Login
      </button>

      {/* Mobile Menu */}
      <div className="mr-3 flex cursor-pointer rounded-[10px] border border-gray-300 bg-gray-200 p-2.5 hover:bg-gray-100 lg:hidden">

        <Sheet>

          <SheetTrigger asChild>
            <button type="button">
              <RxHamburgerMenu size={15} />
            </button>
          </SheetTrigger>

          <SheetContent>

            <SheetHeader>

              <nav className="mt-10 flex h-200 flex-col">

                {navItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? "flex items-center gap-2 rounded-3xl bg-indigo-600 px-4 py-3.5 text-gray-100"
                          : "flex items-center gap-2 rounded-3xl px-5 py-3.5 text-gray-500"
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <Icon
                            color={isActive ? "white" : "gray"}
                            size={16}
                          />

                          <span className="text-[13px] font-semibold lg:text-[16px]">
                            {item.name}
                          </span>
                        </>
                      )}
                    </NavLink>
                  );
                })}

              </nav>

              {/* Mobile Login */}
              <button
                onClick={() => navigate("/login")}
                className="flex cursor-pointer justify-center rounded-3xl bg-indigo-600 px-5 py-2 text-[13px] font-semibold text-gray-100"
              >
                Login
              </button>

            </SheetHeader>

          </SheetContent>

        </Sheet>

      </div>

    </header>
  );
};

export default Header;