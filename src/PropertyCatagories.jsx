import { useState } from "react";

import { data } from "./Constants";
import PropertyCard from "./PropertyCards";

export default function PropertyCatagories() {
  const [isMouseIn, setIsMouseIn] = useState(null);
  function handleMouseIn(id) {
    setIsMouseIn(id);
  }
  return (
    <div className="flex gap-5 justify-center items-center py-3">
      {data.map((card) => (
        <PropertyCard
          card={card}
          isMouseIn={isMouseIn}
          handleMouseIn={handleMouseIn}
          key={card.id}
        />
      ))}
    </div>
  );
}
