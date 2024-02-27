import { Button, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { LanguageSelect } from "./LanguageSelect";
import { ProfileMenu } from "./ProfileMenu";

interface StyledMenuProps {
  menuWidth: string;
}

const StyledButton = styled(Button)({
  padding: "24px 15px",
  lineHeight: "1.3",
  ":hover": {
    color: "#acff99",
  },
});

const StyledMenuItem = styled(MenuItem)({
  padding: "15px",
  color: "black",
});

const StyledMenu = styled(Menu)<StyledMenuProps>(({ menuWidth }) => ({
  "& .MuiList-padding": {
    padding: 0,
  },
  "& .MuiPaper-root": {
    width: menuWidth,
  },
}));

export const MainMenuItems = () => {
  const [dealsAnchorEl, setDealsAnchorEl] = useState<null | HTMLElement>(null);
  const [destinationsAnchorEl, setDestinationsAnchorEl] =
    useState<null | HTMLElement>(null);
  const [travelInfoAnchorEl, setTravelInfoAnchorEl] =
    useState<null | HTMLElement>(null);
  const [supportAnchorEl, setSupportAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null);

  const handleDealsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDealsAnchorEl(event.currentTarget);
    setSelectedMenuItem("deals");
  };

  const handleDestinationsClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setDestinationsAnchorEl(event.currentTarget);
    setSelectedMenuItem("destinations");
  };

  const handleTravelInfoClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setTravelInfoAnchorEl(event.currentTarget);
    setSelectedMenuItem("travelInfo");
  };

  const handleSupportClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSupportAnchorEl(event.currentTarget);
    setSelectedMenuItem("support");
  };

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchorEl(event.currentTarget);
    setSelectedMenuItem("language");
  };

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

  const handleMenuClose = () => {
    setDealsAnchorEl(null);
    setDestinationsAnchorEl(null);
    setTravelInfoAnchorEl(null);
    setSupportAnchorEl(null);
    setLanguageAnchorEl(null);
    setSelectedMenuItem(null);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="grid w-full grid-cols-4 gap-4">
      <div className="w-full col-span-3 flex justify-center">
        <StyledButton
          id="basic-button"
          aria-controls={dealsAnchorEl ? "deals-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={dealsAnchorEl ? "true" : undefined}
          onClick={handleDealsClick}
          sx={{ color: selectedMenuItem === "deals" ? "#acff99" : "white" }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Deals
        </StyledButton>
        <StyledButton
          id="basic-button"
          aria-controls={destinationsAnchorEl ? "destinations-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={destinationsAnchorEl ? "true" : undefined}
          onClick={handleDestinationsClick}
          sx={{
            color: selectedMenuItem === "destinations" ? "#acff99" : "white",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Destinations
        </StyledButton>
        <StyledButton
          id="basic-button"
          onClick={handleClick}
          sx={{ color: "white" }}
        >
          Route map
        </StyledButton>
        <StyledButton
          id="basic-button"
          aria-controls={travelInfoAnchorEl ? "travelinfo-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={travelInfoAnchorEl ? "true" : undefined}
          onClick={handleTravelInfoClick}
          sx={{
            color: selectedMenuItem === "travelInfo" ? "#acff99" : "white",
          }}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Travel info
        </StyledButton>
        <StyledButton
          id="basic-button"
          aria-controls={supportAnchorEl ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={supportAnchorEl ? "true" : undefined}
          onClick={handleSupportClick}
          sx={{ color: selectedMenuItem === "support" ? "#acff99" : "white" }}
          endIcon={<KeyboardArrowDownIcon />}
          // size="small"
        >
          Support
        </StyledButton>
        <StyledMenu
          menuWidth="230px"
          id="deals-menu"
          anchorEl={dealsAnchorEl}
          open={Boolean(dealsAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <StyledMenuItem onClick={handleMenuClose}>
            Current sales and offers
          </StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>
            Top flight deals
          </StyledMenuItem>
        </StyledMenu>
        <StyledMenu
          menuWidth="230px"
          id="destinations-menu"
          anchorEl={destinationsAnchorEl}
          open={Boolean(destinationsAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {cities.map((city, index) => (
            <StyledMenuItem key={index} onClick={handleMenuClose}>
              {city}
            </StyledMenuItem>
          ))}
        </StyledMenu>
        <StyledMenu
          menuWidth="230px"
          id="travelinfo-menu"
          anchorEl={travelInfoAnchorEl}
          open={Boolean(travelInfoAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            role: "menu",
          }}
        >
          <StyledMenuItem onClick={handleMenuClose}>
            Optional fees
          </StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>Baggage</StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>Seating</StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>
            Special assistance
          </StyledMenuItem>
        </StyledMenu>
        <StyledMenu
          menuWidth="200px"
          id="support-menu"
          anchorEl={supportAnchorEl}
          open={Boolean(supportAnchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <StyledMenuItem onClick={handleMenuClose}>Contact us</StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>FAQ</StyledMenuItem>
          <StyledMenuItem onClick={handleMenuClose}>Feedback</StyledMenuItem>
        </StyledMenu>
      </div>
      <div className="flex col-span-1 justify-end">
        <LanguageSelect
          languageAnchorEl={languageAnchorEl}
          handleMenuClose={handleMenuClose}
          selectedMenuItem={selectedMenuItem}
          handleClick={handleLanguageClick}
        />
        <ProfileMenu />
      </div>
    </div>
  );
};
