export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-4 w-full  bg-black text-white">
      <div className="grid grid-cols-1 gap-6 sm:gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-0 md:gap-3 lg:grid-cols-6 w-5/6 sm:py-8 pt-8 pb-2 h-fit mb-8">
        <div className="flex flex-col w-full items-start  h-full align-top justify-start">
          <h1 className="text-xl font-bold p-2">Login</h1>
          <p className="p-2 text-sm">Travel Agent</p>
          <p className="p-2 text-sm">Check In</p>
          <p className="p-2 text-sm">Sustainability</p>
        </div>

        <div className="flex flex-col w-fit items-start h-full align-top justify-start">
          <h1 className="text-xl font-bold p-2">About Us</h1>
          <p className="p-2 text-sm">Our Story</p>
          <p className="p-2 text-sm">Careers</p>
          <p className="p-2 text-sm">Investor Relations</p>
          <p className="p-2 text-sm">Media Centre</p>
        </div>

        <div className="flex flex-col w-full items-start  h-full align-top justifystart">
          <h1 className="text-xl font-bold p-2">Top destinations</h1>
          <p className="p-2 text-sm">Toronto</p>
          <p className="p-2 text-sm">Vancouver</p>
          <p className="p-2 text-sm">New York</p>
          <p className="p-2 text-sm">Los Angeles</p>
          <p className="p-2 text-sm">Miami</p>
          <p className="p-2 text-sm">Las Vegas</p>
          <p className="p-2 text-sm">Orlando</p>
        </div>
        <div className="flex flex-col w-full items-start  h-full align-top justify-start">
          <h1 className="text-xl font-bold p-2">Trending routes</h1>
          <p className="p-2 text-sm">Toronto to Vancouver</p>
          <p className="p-2 text-sm">Toronto to New York</p>
          <p className="p-2 text-sm">Toronto to Los Angeles</p>
          <p className="p-2 text-sm">Toronto to Miami</p>
          <p className="p-2 text-sm">Vancouver to Toronto</p>
          <p className="p-2 text-sm">Vancouver to New York</p>
          <p className="p-2 text-sm">Vancouver to Los Angeles</p>
          <p className="p-2 text-sm">Vancouver to Miami</p>
        </div>
        <div className="flex flex-col w-full items-start  h-full align-top justify-start">
          <h1 className="text-xl font-bold p-2">Legal notice</h1>
          <p className="p-2 text-sm">Terms of use</p>
          <p className="p-2 text-sm">Privacy policy</p>
          <p className="p-2 text-sm">Cookie policy</p>
          <p className="p-2 text-sm">Conditions of carriage</p>
        </div>
        <div className="flex flex-col w-full items-start  h-full align-top justify-start">
          <h1 className="text-xl font-bold p-2">Contact Us</h1>
          <p className="p-2 text-sm">Customer Service</p>
          <p className="p-2 text-sm">Reservations</p>
          <p className="p-2 text-sm">Group Sales</p>
          <div className="flex items-center justify-center w-full mt-8 p-2">
            <div className="flex items-center w-full justify-center sm:justify-start gap-2 m-auto">
              <a
                className="rounded-full w-8 h-8 p-2 flex items-center justify-center bg-[#acff99] hover:bg-[#8ae68a]"
                href="https://www.facebook.com/"
              >
                <img src="facebook-icon.svg" alt="facebook" className="" />
              </a>
              <a
                href="https://www.twitter.com/"
                className="w-8 h-8 p-2 bg-[#acff99] flex items-center justify-center rounded-full hover:bg-[#8ae68a]"
              >
                <img src="twitter-icon.svg" alt="twitter" className="" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="w-8 h-8 p-2 bg-[#acff99] flex items-center justify-center rounded-full hover:bg-[#8ae68a]"
              >
                <img src="insta-icon.svg" alt="instagram" className="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-center sm:text-start  text-gray-400  w-5/6">
        &copy; 2024 Oleksandr Levchuk - Flair Airlines Website Redesign
      </p>
    </footer>
  );
};
