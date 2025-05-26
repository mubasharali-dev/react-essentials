import { use, useEffect, useState } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [fullListRestaurants, setFullListRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // loading state
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true); // start loading
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6141396&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      const cards = json?.data?.cards;
      const restaurantCard = cards[1];

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setListOfRestaurants(restaurants || []);
      setFullListRestaurants(restaurants || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body">
      <Header />
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <input
            type="search"
            className="searchBar"
            placeholder="Search Restaurants..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            className="searchBox"
            onClick={() => {
              const filteredRestaurants = fullListRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(search.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
          <button
            className="resetBtn"
            onClick={() => {
              setListOfRestaurants(fullListRestaurants);
              setSearch("");
            }}
          >
            Reset
          </button>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants
                .filter((res) => res?.info?.avgRating > 4)
                .sort((a, b) => b.info.avgRating - a.info.avgRating);
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id}
                resData={restaurant.info}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
