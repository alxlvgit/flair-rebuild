import FooterLink from "./FooterLink";

const FooterLinks = () => {
  const navLinks = [
    { title: "Login", links: ["Travel Agent", "Check In", "Sustainability"] },
    {
      title: "About Us",
      links: ["Our Story", "Careers", "Investor Relations", "Media Centre"],
    },
    {
      title: "Top destinations",
      links: [
        "Toronto",
        "Vancouver",
        "New York",
        "Los Angeles",
        "Miami",
        "Las Vegas",
        "Orlando",
      ],
    },
    {
      title: "Trending routes",
      links: [
        "Toronto to Vancouver",
        "Toronto to New York",
        "Toronto to Los Angeles",
        "Toronto to Miami",
        "Vancouver to Toronto",
        "Vancouver to New York",
        "Vancouver to Los Angeles",
        "Vancouver to Miami",
      ],
    },
    {
      title: "Legal notice",
      links: [
        "Terms of use",
        "Privacy policy",
        "Cookie policy",
        "Conditions of carriage",
      ],
    },
  ];

  return (
    <>
      {navLinks.map((navLink, index) => (
        <FooterLink key={index} title={navLink.title} links={navLink.links} />
      ))}
      <div className="flex flex-col w-full items-start  h-full align-top justify-start">
        <h1 className="text-xl font-bold p-2">Contact Us</h1>
        <a href="#" className="p-2 text-sm text-gray-200 hover:underline">
          Customer Service
        </a>
        <a href="#" className="p-2 text-sm text-gray-200 hover:underline">
          Reservations
        </a>
        <a href="#" className="p-2 text-sm text-gray-200 hover:underline">
          Group Sales
        </a>
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
    </>
  );
};

export default FooterLinks;
