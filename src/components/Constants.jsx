import { GoHome } from "react-icons/go";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { Briefcase } from "lucide-react";
import { LuLandPlot } from "react-icons/lu";
import { LuWarehouse } from "react-icons/lu";
import { Store } from "lucide-react";
import { LiaCarSideSolid } from "react-icons/lia";
import { FiTruck } from "react-icons/fi";
import { IoBicycleOutline } from "react-icons/io5";
import { LiaShuttleVanSolid } from "react-icons/lia";

export const propertyData = [
  {
    icon: <GoHome />,
    name: "All",
    quantity: "3 listings",
    id: "111",
  },
  {
    icon: <PiBuildingApartmentLight />,
    name: "Apartment",
    quantity: "3 listings",
    id: "112",
  },
  {
    icon: <Briefcase />,
    name: "Office",
    quantity: "0 listings",
    id: "113",
  },
  {
    icon: <LuLandPlot />,
    name: "Land",
    quantity: "0 listings",
    id: "114",
  },
  {
    icon: <LuWarehouse />,
    name: "Warehouse",
    quantity: "0 listings",
    id: "115",
  },
  {
    icon: <Store />,
    name: "Commercial",
    quantity: "0 listings",
    id: "116",
  },
];

export const vehicleData = [
  {
    icon: <LiaCarSideSolid />,
    name: "All",
    quantity: "3 listings",
    id: "221",
  },
  {
    icon: <LiaCarSideSolid />,
    name: "Sedan",
    quantity: "3 listings",
    id: "222",
  },
  {
    icon: <FiTruck />,
    name: "SUV",
    quantity: "0 listings",
    id: "223",
  },
  {
    icon: <FiTruck />,
    name: "Truck",
    quantity: "0 listings",
    id: "224",
  },
  {
    icon: <IoBicycleOutline />,
    name: "MotorCycle",
    quantity: "0 listings",
    id: "225",
  },
  {
    icon: <LiaShuttleVanSolid />,
    name: "Heavy",
    quantity: "0 listings",
    id: "226",
  },
];
