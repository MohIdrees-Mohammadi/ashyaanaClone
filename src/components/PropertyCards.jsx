import { NavLink } from "react-router-dom";

export default function PropertyCard({
  card,
  isMouseIn,
  handleMouseIn,
  handleMouseOut,
}) {
  const isMouseEntered = card.id === isMouseIn;

  return (
    <NavLink
      to={
        card.id === "111"
          ? "/allApartements"
          : card.id === "112"
            ? "/apartements"
            : card.id === "113"
              ? "/office"
              : card.id === "114"
                ? "/land"
                : card.id === "115"
                  ? "/warehouse"
                  : card.id === "116"
                    ? "/commercial"
                    : card.id === "221"
                      ? "/allCars"
                      : card.id === "222"
                        ? "/sedan"
                        : card.id === "223"
                          ? "/suv"
                          : card.id === "224"
                            ? "/truck"
                            : card.id === "225"
                              ? "/motorcycle"
                              : card.id === "226"
                                ? "/heavy"
                                : "/allApartements"
      }
      onMouseEnter={() => handleMouseIn(card.id)}
      onMouseLeave={handleMouseOut}
      className={
        isMouseEntered
          ? " box-border shrink-0 flex flex-col gap-1 justify-center items-center border border-gray-200 rounded-2xl cursor-pointer w-[calc((100vw-60px)/4)] h-25 px-1 text-[11px] bg-blue-200 md:w-25 md:h-25 lg:w-34 md:block-auto lg:h-34 "
          : " box-border shrink-0 flex flex-col gap-1 justify-center items-center border border-gray-200 rounded-2xl cursor-pointer w-[calc((100vw-60px)/4)] h-25 px-1 text-[11px] bg-white md:w-25 md:h-25 md:to-black lg:w-34 lg:h-34"
      }
    >
      <span
        className={
          isMouseEntered
            ? "font-semibold w-10 h-10 flex justify-center items-center rounded-xl text-white bg-blue-600 lg:text-[20px]"
            : "font-semibold w-10 h-10 flex justify-center items-center rounded-xl text-blue-600 lg:text-[20px]"
        }
      >
        {card.icon}
      </span>

      <span className="font-semibold text-center">{card.name}</span>

      <span className="text-[12px]">{card.quantity}</span>
    </NavLink>
  );
}
