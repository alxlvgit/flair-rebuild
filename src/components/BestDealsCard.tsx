const BestDealsCard = ({
  destination,
  price,
  tripType,
  imageUrl,
}: {
  destination: string;
  price: string;
  tripType: string;
  imageUrl: string;
}) => {
  return (
    <div
      className={
        "bg-white relative rounded-2xl border bg-cover h-[250px] border-gray-100 p-4 shadow-lg hover:shadow-3xl cursor-pointer hover:scale-105 transform transition-all duration-300"
      }
    >
      <img
        src={imageUrl}
        alt={destination}
        className="absolute top-0 left-0 object-cover w-full h-full rounded-2xl -z-20"
      />
      <div className="absolute -z-10 top-0 left-0 bg-black bg-opacity-40 w-full h-full rounded-2xl"></div>
      <div className="flex flex-col justify-between h-full">
        <div className="flex justify-start border border-gray-200 w-fit py-1 px-4 bg-gray-100 rounded-lg text-sm">
          {" "}
          {tripType}{" "}
        </div>
        <div className="flex text-white justify-between items-end">
          <p className="text-lg font-bold"> {destination} </p>
          <div>
            <p className="text-sm text-end">From</p>
            <p className="text-lg font-bold"> {price} </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestDealsCard;
