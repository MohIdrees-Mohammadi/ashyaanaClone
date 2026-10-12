import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CustomerSelect from "@/components/CustomerSelect";

import {
  UsersRound,
  Search,
  TrendingUp,
  Calculator,
  Sparkles,
  MoveRight,
} from "lucide-react";

const property = [
  { label: "House", value: "house" },
  { label: "Apartment", value: "apartment" },
  { label: "Villa", value: "villa" },
  { label: "Land", value: "land" },
  { label: "Commercial", value: "commercial" },
];

const propertyOperation = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" },
];

const vehicle = [
  { label: "Car", value: "car" },
  { label: "SUV", value: "suv" },
  { label: "Motorcycle", value: "motorcycle" },
  { label: "Truck", value: "truck" },
];

const vehicleOperation = [
  { label: "Buy", value: "buy" },
  { label: "Rent", value: "rent" },
  { label: "Sell", value: "sell" },
];

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1778016740636-5ef0aaab1e97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Living in the Heart of the City",
    description: "Experience luxury living amidst nature",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1784462433921-ee73385b6f91?q=80&w=1067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Living in the Heart of the City",
    description: "Experience luxury living amidst nature",
  },
  {
    image:
      "https://images.unsplash.com/photo-1778016740636-5ef0aaab1e97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Modern Living in the Heart of the City",
    description: "Experience luxury living amidst nature",
  },
];

const Home = () => {
  // false = Property selected, true = Vehicle selected
  const [isVehicle, setIsVehicle] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();

    const params = new URLSearchParams({
      type: isVehicle ? "vehicle" : "property",
      search: searchTerm.trim(),
    });

    navigate(`/listing?${params.toString()}`);
  };

  return (
    <main className="w-full overflow-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section
        id="home-search"
        className="relative mx-auto mt-4 w-[94%] max-w-7xl sm:mt-6"
      >
        <Carousel
          className="relative w-full"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent className="ml-0">

            {slides.map((slide, index) => (
              <CarouselItem
                key={`${slide.image}-${index}`}
                className="pl-0"
              >
                <div className="relative h-[720px] overflow-hidden rounded-2xl sm:h-[650px] sm:rounded-3xl lg:h-[560px]">

                  {/* Original carousel images kept unchanged */}
                  <img
                    src={slide.image}
                    alt="Modern property"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/70" />

                  {/* Carousel title */}
                  <div className="absolute inset-x-4 top-[13%] z-10 flex flex-col items-center text-center sm:inset-x-10 sm:top-[17%] lg:top-[20%]">

                    <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>

                    <p className="mt-3 max-w-2xl text-sm text-gray-200 sm:text-lg md:text-xl">
                      {slide.description}
                    </p>

                  </div>

                </div>
              </CarouselItem>
            ))}

          </CarouselContent>

          {/* Carousel arrows: bottom-right */}
          <CarouselPrevious
            aria-label="Previous slide"
            className="!absolute !left-auto !right-[4.5rem] !top-auto !bottom-5 !translate-y-0 z-20 h-10 w-10 rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:!right-20 sm:!bottom-7"
          />

          <CarouselNext
            aria-label="Next slide"
            className="!absolute !left-auto !right-4 !top-auto !bottom-5 !translate-y-0 z-20 h-10 w-10 rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:!right-7 sm:!bottom-7"
          />
        </Carousel>

        {/* New listings badge */}
        <div className="absolute left-3 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs text-white backdrop-blur-md sm:left-6 sm:top-6 sm:px-5 sm:text-sm">
          <Sparkles size={15} className="shrink-0 text-amber-300" />
          <span>250+ new listings this week</span>
        </div>

        {/* ================= PROPERTY / VEHICLE TABS ================= */}
        <div className="absolute my-20 left-1/2  top-[38%] z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-black/30 p-1.5 shadow-lg backdrop-blur-md sm:top-[41%] lg:top-[47%]">

          <button
            type="button"
            aria-pressed={!isVehicle}
            onClick={() => setIsVehicle(false)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 sm:px-6 ${
              !isVehicle
                ? "bg-indigo-600 text-white shadow-md"
                : "text-white/90 hover:bg-white/15"
            }`}
          >
            Property
          </button>

          <button
            type="button"
            aria-pressed={isVehicle}
            onClick={() => setIsVehicle(true)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 sm:px-6 ${
              isVehicle
                ? "bg-indigo-600 text-white shadow-md"
                : "text-white/90 hover:bg-white/15"
            }`}
          >
            Vehicle
          </button>

        </div>

        {/* ================= SEARCH BAR ================= */}
        <div className="absolute inset-x-3 py-30 top-[47%] z-20 sm:inset-x-8 sm:top-[50%] lg:inset-x-0 lg:top-[55%]  ">

          <form
            onSubmit={handleSearch}
            className="mx-auto grid w-full max-w-170 grid-cols-1 gap-2 rounded-2xl border border-white/40 bg-white/95 p-3 shadow-2xl backdrop-blur-xl sm:grid-cols-2 sm:gap-3 lg:grid-cols-[minmax(0,1fr)_130px_100px_auto] lg:items-center lg: lg:rounded-full lg:p-2"
          >

            {/* Search input */}
            <div className="relative min-w-0 sm:col-span-2 lg:col-span-1">

              <Search
                size={20}
                className=" pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={
                  isVehicle
                    ? "Search vehicles..."
                    : "Search properties..."
                }
                aria-label={
                  isVehicle ? "Search vehicles" : "Search properties"
                }
                className="h-12 w-full min-w-0 rounded-xl border border-gray-200 bg-transparent pl-11 pr-3 text-sm text-gray-800 outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 lg:rounded-full lg:border-0 lg:focus:ring-0"
              />

            </div>

            {/* Category filter */}
            <div className="min-w-0 lg:border-l lg:border-gray-200  lg:px-2">
              {isVehicle ? (
                <CustomerSelect
                  items={vehicle}
                  placeholder="Vehicle Type"
                />
              ) : (
                <CustomerSelect
                  items={property}
                  placeholder="Property Type"
                />
              )}
            </div>

            {/* Operation filter */}
            <div className="min-w-0 lg:border-l lg:border-gray-200 lg:px-2">
              {isVehicle ? (
                <CustomerSelect
                  items={vehicleOperation}
                  placeholder="Buy"
                />
              ) : (
                <CustomerSelect
                  items={propertyOperation}
                  placeholder="Buy"
                />
              )}
            </div>

            {/* Search button */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 lg:w-auto lg:rounded-full"
            >
              <Search size={17} />
              Search
            </button>

          </form>
        </div>
      </section>


      {/* ================= SELLER SECTION ================= */}
      <section
        className="relative isolate mx-auto mt-12 w-[94%] max-w-7xl overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat sm:mt-16 sm:rounded-3xl lg:mt-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600')",
        }}
      >
        {/* Dark background overlay */}
        <div className="absolute inset-0 z-0 bg-black/75" />

        <div className="relative z-10 flex flex-col gap-10 p-5 sm:p-8 md:p-10 lg:flex-row lg:items-center lg:gap-10 lg:p-12 xl:gap-14 xl:p-14">

          {/* Statistics cards */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:w-[52%]">

            {/* Happy Clients */}
            <div className="flex min-h-[175px] flex-col items-center justify-center rounded-2xl border border-gray-400/40 bg-black/50 p-5 text-center text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/70">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <UsersRound size={27} />
              </span>

              <span className="text-2xl font-bold xl:text-3xl">
                +15,000
              </span>

              <span className="mt-2 text-sm text-gray-300">
                Happy Clients
              </span>
            </div>

            {/* Active Properties */}
            <div className="flex min-h-[175px] flex-col items-center justify-center rounded-2xl border border-gray-400/40 bg-black/50 p-5 text-center text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/70">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <Calculator size={27} />
              </span>

              <span className="text-2xl font-bold xl:text-3xl">
                +2,500
              </span>

              <span className="mt-2 text-sm text-gray-300">
                Active Properties
              </span>
            </div>

            {/* Transaction Success */}
            <div className="flex min-h-[175px] flex-col items-center justify-center rounded-2xl border border-gray-400/40 bg-black/50 p-5 text-center text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/70">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <TrendingUp size={27} />
              </span>

              <span className="text-2xl font-bold xl:text-3xl">
                98%
              </span>

              <span className="mt-2 text-sm text-gray-300">
                Transaction Success
              </span>
            </div>

          </div>

          {/* Seller content */}
          <div className="w-full min-w-0 lg:flex-1">

            {/* Sales badge */}
            <div className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-gray-400/40 bg-blue-600/10 px-4 py-3 text-sm text-white sm:px-5 sm:text-base">
              <Sparkles
                size={20}
                className="shrink-0 text-blue-400"
              />

              <span>
                Over 500 successful sales last month
              </span>
            </div>

            {/* Seller heading */}
            <h2 className="mb-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl xl:text-5xl">
              Ready to Sell Your{" "}
              <span className="text-blue-400">
                Premium Property
              </span>
              ?
            </h2>

            {/* Description */}
            <p className="mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Join our exclusive network of verified sellers.
              Showcase your luxury property to qualified buyers worldwide.
            </p>

            {/* Seller buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">

              <button
                type="button"
                onClick={() => navigate("/listing")}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto sm:text-lg"
              >
                Become a Seller
                <MoveRight size={20} />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("home-search")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex min-h-14 w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/20 sm:w-auto sm:text-lg"
              >
                Learn More
              </button>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;