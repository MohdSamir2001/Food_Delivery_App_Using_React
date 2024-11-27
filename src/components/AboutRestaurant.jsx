const AboutRestaurant = ({ aboutRes }) => {
  const {
    avgRating,
    city,
    costForTwoMessage,
    cuisines,
    name,
    totalRatingsString,
  } = aboutRes;
  return (
    <div className="text-center p-2 rounded-lg">
      <h1 className="text-3xl  font-semibold">{name}</h1>
      <h1 className="font-semibold">
        {avgRating} ({totalRatingsString})
      </h1>
      <h1 className="font-semibold">{cuisines?.join(" , ")}</h1>
      <h1 className="font-semibold">Rs : {costForTwoMessage}</h1>
      <h1 className="font-semibold">{city}</h1>
    </div>
  );
};
export default AboutRestaurant;
