import React from "react";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "swiper-slide": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

export const PromoTile = () => {
  return (
    <div className="flex lg:flex-row flex-col relative items-center justify-center rounded-2xl mx-auto mb-12 w-full min-h-80 lg:h-80  shadow-lg border border-gray-100">
      <swiper-container
        slides-per-view="1"
        pagination="true"
        pagination-clickable="true"
        loop="true"
        autoplay="true"
      >
        <swiper-slide>
          <img src="/spring-promo.png" className="w-full h-full object-cover" />
        </swiper-slide>
        <swiper-slide>
          <img src="/spring-promo.png" className="w-full h-full object-cover" />
        </swiper-slide>
      </swiper-container>
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
