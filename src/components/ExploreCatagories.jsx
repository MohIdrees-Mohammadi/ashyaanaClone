import { useState } from "react";
import { GoHome } from "react-icons/go";
import { LuCar } from "react-icons/lu";

export default function ExploreCatagories({
  isActive,
  setIsActive,
  onPropertyData,
  onVehicleData,
}) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-semibold font-serif">
          Explore <span className="text-blue-300 font-sans">Categories</span>
        </h2>
        <span className="text-[14px] text-gray-400 font-">
          Find what you need faster
        </span>
      </div>

      <div className="flex justify-center items-center py-7 ">
        <div className="bg-gray-100/70 flex gap-1 px-1 py-1 rounded-3xl cursor-pointer">
          <div
            onClick={onPropertyData}
            className={
              isActive
                ? "flex gap-2 items-center border text-white border-gray-300 rounded-2xl cursor-pointer px-5 bg-blue-600 justify-center py-1"
                : "flex gap-2 items-center rounded-2xl px-5 justify-center py-1 text-gray-600 cursor-pointer hover:text-black cursor-pointer"
            }
          >
            <GoHome />
            <button className="cursor-pointer">Property</button>
          </div>
          <div
            onClick={onVehicleData}
            className={
              isActive
                ? "flex gap-2 items-center rounded-2xl px-5 justify-center py-1 text-gray-600 cursor-pointer hover:text-black"
                : "flex gap-2 items-center border border-gray-300 rounded-2xl px-5 cursor-pointer bg-blue-600 justify-center py-1 text-white"
            }
          >
            <LuCar />
            <button className="cursor-pointer">Vehicles</button>
          </div>
        </div>
      </div>
    </div>
  );
}
