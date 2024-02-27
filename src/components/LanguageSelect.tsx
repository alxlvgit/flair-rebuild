import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export const LanguageSelect = ({
  selectedMenuItem,
  handleClick,
  languageAnchorEl,
  handleMenuClose,
}: {
  selectedMenuItem: string | null;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  languageAnchorEl: null | HTMLElement;
  handleMenuClose: () => void;
}) => {
  const [selectedItem, setSelectedItem] = useState("EN");

  const handleMenuItemClick = (item: string) => {
    setSelectedItem(item);
    handleMenuClose();
  };
  return (
    <>
      <Button
        id="language-button"
        aria-haspopup="true"
        onClick={handleClick}
        aria-controls={languageAnchorEl ? "language-menu" : undefined}
        aria-expanded={languageAnchorEl ? "true" : undefined}
        sx={{
          ":hover": {
            borderColor: "#acff99",
          },
          color: selectedMenuItem === "language" ? "#acff99" : "white",
          border:
            selectedMenuItem === "language"
              ? "1px solid #acff99"
              : "1px solid white",
          borderRadius: "40px",
          padding: "6px 20px",
          height: "fit-content",
          my: "auto",
        }}
        endIcon={<KeyboardArrowDownIcon />}
        size="small"
      >
        {selectedItem ? selectedItem : "EN"}
      </Button>

      <Menu
        id="language-menu"
        anchorEl={languageAnchorEl}
        open={Boolean(languageAnchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "10px",
            marginTop: "10px",
            width: "6rem",
            padding: "0",
          },
          "& .MuiMenuItem-root": {
            padding: "10px 20px",
          },
          "& .MuiList-padding": {
            padding: 0,
          },
        }}
      >
        <MenuItem
          selected={selectedItem === "EN"}
          onClick={() => handleMenuItemClick("EN")}
        >
          {" "}
          EN{" "}
        </MenuItem>
        <MenuItem
          selected={selectedItem === "FR"}
          onClick={() => handleMenuItemClick("FR")}
        >
          FR
        </MenuItem>
        <MenuItem
          selected={selectedItem === "DE"}
          onClick={() => handleMenuItemClick("DE")}
        >
          DE
        </MenuItem>
      </Menu>
    </>
  );
};
