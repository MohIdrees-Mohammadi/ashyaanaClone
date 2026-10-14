import { useState } from "react";

import PropertyCard from "./PropertyCards";

export default function PropertyCatagories({ data }) {
  const [isMouseIn, setIsMouseIn] = useState(null);

  function handleMouseOut() {
    setIsMouseIn(null);
  }

  function handleMouseIn(id) {
    setIsMouseIn(id);
  }

  return (
    <div className="property-scroll w-full lg:mt-4 ">
      <div className="flex flex-nowrap gap-3 px-3 justify-center items-center lg:grid-cols-6 lg:gap-4 lg:justify-center lg: items-center ">
        {data.map((card) => (
          <PropertyCard
            key={card.id}
            card={card}
            isMouseIn={isMouseIn}
            handleMouseIn={handleMouseIn}
            handleMouseOut={handleMouseOut}
          />
        ))}
      </div>
    </div>
  );
}
