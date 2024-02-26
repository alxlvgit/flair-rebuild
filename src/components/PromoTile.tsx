export const PromoTile = () => {
  return (
    <div className="flex lg:flex-row flex-col relative items-center justify-center rounded-2xl mx-auto mb-12 w-full min-h-80 lg:h-80  shadow-lg border border-gray-100">
      <img
        src="/promo.jpg"
        className="object-cover lg:w-3/5 w-full h-55 lg:h-full lg:rounded-tl-2xl lg:rounded-bl-2xl rounded-t-2xl lg:rounded-tr-none"
      />
      <div className="flex flex-col justify-center items-center lg:h-full lg:w-2/5 w-full p-4 bg-[#212529] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
        <h1 className="md:text-3xl text-xl text-center font-bold text-white">
          Book your flight
        </h1>
        <p className="text-white md:text-base text-sm text-center">
          Spend spring break in the city that never sleeps.
        </p>
        <button className="bg-[#acff99] sm:text-base text-small text-black rounded-md p-2 md:w-1/2 w-full mt-4 hover:bg-[#8ae68a]">
          Book now
        </button>
      </div>
    </div>
  );
};
