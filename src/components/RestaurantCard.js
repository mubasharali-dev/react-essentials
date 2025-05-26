const RestaurantCard = ({ resData }) => {
  const { name, cuisines = [], avgRating, sla, cloudinaryImageId } = resData;

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : "Restaurant Image";

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={imageUrl} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">⭐ {avgRating}</h4>
      <h4 className="res-time">
        {sla?.deliveryTime ? `${sla.deliveryTime} mins` : "N/A"}
      </h4>
    </div>
  );
};

export default RestaurantCard;
