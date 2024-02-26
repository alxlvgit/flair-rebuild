import { Button } from "@mui/material";
import BestDealsCard from "./BestDealsCard";

export const BestDealsContainer = () => {
  return (
    <div className="w-full h-fit flex flex-col mx-auto mb-12">
      <div className="flex items-center justify-center align-middle sm:justify-start flex-wrap sm:flex-nowrap w-full mb-12">
        <h1 className="text-3xl text-center font-bold ">Top deals from</h1>
        <h1 className="text-3xl font-bold text-[#7008a0] cursor-pointer ml-[0.25em] hover:underline transition-all duration-300 ease-in-out">
          Vancouver
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        <BestDealsCard
          destination="Toronto"
          price="$200"
          tripType="Round Trip"
          imageUrl="toronto.webp"
        />
        <BestDealsCard
          destination="Las Vegas"
          price="$300"
          tripType="One Way"
          imageUrl="vegas.jpg"
        />
        <BestDealsCard
          destination="Ottawa"
          price="$250"
          tripType="Round Trip"
          imageUrl="ottawa.jpg"
        />
        <BestDealsCard
          destination="Cancun"
          price="$400"
          tripType="Round Trip"
          imageUrl="cancun.jpg"
        />
        <BestDealsCard
          destination="Kelowna"
          price="$150"
          tripType="One Way"
          imageUrl="kelowna.webp"
        />
        <BestDealsCard
          destination="Calgary"
          price="$250"
          tripType="Round Trip"
          imageUrl="calgary.webp"
        />
      </div>
      <Button
        variant="contained"
        sx={{
          mt: 6,
          mx: "auto",
          padding: "0.6rem 2rem",
          borderRadius: "0.5rem",
          background: "#7008a0",
          color: "white",
          fontWeight: "bold",
          "&:hover": {
            background: "#212529",
          },
        }}
      >
        View all deals
      </Button>
    </div>
  );
};
