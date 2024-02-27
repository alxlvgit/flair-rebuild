import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { CarRental, Flight, Hotel } from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const SearchFlightsForm = () => {
  const [value, setValue] = useState("1");
  const [radioValue, setRadioValue] = useState("one-way");
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!isNaN(Number(inputValue)) && Number(inputValue) >= 1) {
      setValue(inputValue);
    }
  };
  return (
    <div className="flex flex-col items-center min-h-80 justify-center rounded-2xl py-6 lg:py-0 sm:px-8 px-4 border border-gray-100 mb-12  mx-auto w-full shadow-lg">
      <div className="flex w-full overflow-x-auto justify-center sm:justify-start">
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          classes={{
            root: "text-[0.7rem] sm:text-sm w-full",
          }}
          variant="scrollable"
          visibleScrollbar
          sx={{
            "& .MuiTabs-indicator": { background: "#7008a0" },
            "& .MuiTab-textColorPrimary": { color: "black" },
            "& .MuiTab-root.Mui-selected": { color: "#7008a0" },
            "& .MuiTab-root": {
              minHeight: "auto",
              fontSize: "unset",
            },
          }}
        >
          <Tab
            sx={{ color: "black" }}
            icon={<Flight />}
            iconPosition="start"
            label="Flights"
          />
          <Tab
            sx={{ color: "black" }}
            icon={<CarRental />}
            iconPosition="start"
            label="Cars"
          />
          <Tab
            sx={{ color: "black" }}
            icon={<Hotel />}
            iconPosition="start"
            label="Hotels"
          />
        </Tabs>
      </div>
      <FormControl
        sx={{
          justifyContent: "start",
          width: "100%",
          mb: 2,
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ mt: 2, "& .MuiSvgIcon-root": { color: "#7008a0" } }}
          onChange={(e) => setRadioValue(e.target.value)}
          value={radioValue}
        >
          <FormControlLabel
            control={<Radio />}
            label="one-way"
            value="one-way"
          />
          <FormControlLabel
            value="round-trip"
            control={<Radio />}
            label="round trip"
          />
        </RadioGroup>
      </FormControl>
      <div className="grid grid-cols-1 lg:grid-cols-12 justify-start mb-4 lg:mb-0 items-start w-full">
        <div className="flex col-span-12 mb-4 lg:mb-0 lg:col-span-4">
          <TextField
            id="outlined-basic"
            sx={{
              width: "50%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem 0rem 0rem 0.5rem",
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderRightColor: "transparent",
                color: "black",
              },
              " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7008a0",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#7008a0",
                opacity: 1,
              },
            }}
            label="From"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            sx={{
              width: "50%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0rem 0.5rem 0.5rem 0rem",
              },
              " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7008a0",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#7008a0",
                opacity: 1,
              },
            }}
            label="To"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="lg:flex w-full h-full lg:col-span-1 mx-auto hidden justify-center items-center">
          <Divider
            orientation="vertical"
            sx={{
              opacity: 0.6,
            }}
            flexItem
          />
        </div>
        <div className="flex col-span-12 justify-start  mb-4 lg:mb-0 items-start w-full lg:col-span-4">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.5rem 0rem 0rem 0.5rem",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRightColor: "transparent",
                },
                " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#7008a0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#7008a0",
                  opacity: 1,
                },
              }}
              label="Departure"
            />
            <DatePicker
              slotProps={{ textField: { size: "small" } }}
              disabled={radioValue === "one-way"}
              sx={{
                width: "50%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0rem 0.5rem 0.5rem 0rem",
                },
                " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#7008a0",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#7008a0",
                  opacity: 1,
                },
              }}
              label="Return"
            />
          </LocalizationProvider>
        </div>
        <div className="lg:flex w-full h-full lg:col-span-1 mx-auto hidden justify-center items-center">
          <Divider
            orientation="vertical"
            sx={{
              mx: "auto",
              opacity: 0.6,
              columnSpan: 1,
            }}
            flexItem
          />
        </div>
        <div className="flex w-1/2 lg:w-full col-span-12 lg:col-span-2 lg:justify-end">
          <TextField
            size="small"
            type="number"
            label="Passengers"
            variant="outlined"
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "0.5rem",
              },
              " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7008a0",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#7008a0",
                opacity: 1,
              },
            }}
            value={value}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </div>

      <div className="flex w-full sm:flex-row flex-col sm:justify-between justify-center sm:items-end">
        <TextField
          id="outlined-basic"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "0",
              padding: 0,
            },
            " & .Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#7008a0",
            },

            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
              borderBottom: "1px solid #7008a0",
            },
            "& .MuiInputBase-input": {
              px: 0,
            },
            "& .MuiInputLabel-root": {
              color: "#7008a0",
              opacity: 1,
            },
          }}
          label="Promo code"
          variant="outlined"
          size="small"
          autoComplete="off"
        />
        <Button
          variant="contained"
          sx={{
            alignSelf: "flex-end",
            mt: 6,
            padding: "0.6rem 2rem",
            borderRadius: "0.5rem",
            background: "#7008a0",
            color: "white",
            "&:hover": {
              background: "#212529",
            },
          }}
        >
          Search
        </Button>
      </div>
    </div>
  );
};
