import React, { useEffect, useState } from "react";
import { ProfileMenu } from "./ProfileMenu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledAccordion = styled(Accordion)({
  margin: "1px 0 !important",
  width: "100%",
  " & .MuiAccordionSummary-root": {
    color: "#7008A0",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

const StyledAccordionSummary = styled(AccordionSummary)({
  width: "100%",
  color: "black",
  fontSize: "1.2rem",
  "&.Mui-expanded": {
    color: "#7008A0",
    minHeight: "32px",
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "12px 0",
  },
});

const cities = [
  "Calgary",
  "Cancun",
  "Toronto",
  "Vancouver",
  "Las Vegas",
  "Los Angeles",
  "New York",
  "San Francisco",
  "London",
  "Paris",
  "Rome",
  "Zurich",
  "Tokyo",
  "Seoul",
  "Singapore",
  "Hong Kong",
  "Sydney",
];

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Disable overflow when the mobile navbar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      // Reset overflow when the mobile navbar is closed
      document.body.style.overflow = "auto";
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`z-50 w-full lg:hidden ${
        isOpen
          ? "fixed top-0 left-0 z-50 h-full overflow-y-auto bg-white"
          : "block w-full h-fit fixed top-0 left-0 bg-[#212529]"
      }`}
    >
      <div
        className={`w-full py-4 px-6 flex items-center align-middle justify-between
          ${
            isOpen
              ? "border-b border-gray-700 bg-[#212529]"
              : "border-none border-b-0"
          }
        `}
      >
        <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
              className="fill-white"
            >
              <path d="M 7.7070312 6.2929688 L 6.2929688 7.7070312 L 23.585938 25 L 6.2929688 42.292969 L 7.7070312 43.707031 L 25 26.414062 L 42.292969 43.707031 L 43.707031 42.292969 L 26.414062 25 L 43.707031 7.7070312 L 42.292969 6.2929688 L 25 23.585938 L 7.7070312 6.2929688 z"></path>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
            </svg>
          )}
        </button>
        <a href="/">
          <img src="logo.png" alt="logo" className="w-20 brightness-90" />
        </a>
        <ProfileMenu />
      </div>
      {isOpen && (
        <div className="flex flex-col w-full pb-10 align-middle h-fit overflow-y-auto text-white font-medium items-center ">
          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Deals
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Current sales and offers
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Top flight deals
              </a>
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Destinations
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              {cities.map((city, index) => (
                <a
                  key={index}
                  className="text-gray-600 text-sm w-fit"
                  href={`/`}
                >
                  {city}
                </a>
              ))}
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion>
            <StyledAccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Route map
            </StyledAccordionSummary>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Travel info
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Optional fees
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Baggage
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Seating
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Special assistance
              </a>
            </StyledAccordionDetails>
          </StyledAccordion>

          <StyledAccordion>
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Support
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Contact us
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                FAQs
              </a>
              <a className="text-gray-600 text-sm w-fit" href="/">
                Feedback
              </a>
            </StyledAccordionDetails>
          </StyledAccordion>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
