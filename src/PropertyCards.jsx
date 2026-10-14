export default function PropertyCard({ card, isMouseIn, handleMouseIn }) {
  const isMouseEntered = card.id === isMouseIn;

  return (
    <div
      key={card.id}
      onMouseEnter={() => handleMouseIn(card.id)}
      className={
        isMouseEntered
          ? "flex flex-col gap-2 border border-gray-200 justify-center items-center px-8 h-30 w-40 rounded-2xl bg-blue-100 cursor-pointer "
          : "flex flex-col gap-2 border border-gray-200 justify-center items-center px-8 h-30 w-40 rounded-2xl cursor-pointer"
      }
    >
      <span
        className={
          isMouseEntered
            ? "font-semibold w-10 h-10 flex justify-center items-center text-white bg-blue-600 rounded-xl  "
            : "font-semibold w-10 h-10 flex justify-center items-center text-blue-60 rounded-xl "
        }
      >
        {card.icon}
      </span>
      <span className="font-semibold">{card.name}</span>
      <span className="text-[12px]">{card.quantity}</span>
    </div>
  );
}
