import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ALL_RESTAURANTS_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const AppBody = () => {
    const [initial, setInitial] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const filterTopRated = () => {
        const filteredRes = listOfRestaurants?.filter((res) => {
            if (res?.info?.avgRating > 4) {
                return res;
            }
        })
        setListOfRestaurants(filteredRes);
    }

    const clearFilter = () => {
        setListOfRestaurants(initial);
        setText("");
    }

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(ALL_RESTAURANTS_API_URL);
        const json = await response.json();
        // console.log("all ", json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setInitial(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setLoading(false);
        setListOfRestaurants(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const searchHandler = () => {
        const searchRestros = initial?.filter((res) => {
            const resName = res.info.name.toLowerCase();
            if (resName.includes(text.toLowerCase())) {
                return res;
            }
        })
        setListOfRestaurants(searchRestros);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {loading ? (
                <Shimmer />
            ) : (
                <div className="app__body">
                    <div className="topbar">
                        <div className="feature">
                            <button
                                onClick={filterTopRated}
                                className="filter">Top Rated Restaurants</button>
                            <button
                                onClick={clearFilter}
                                className="clear">Clear Filter  ❌</button>
                        </div>
                        <div className="search__container">
                            <input
                                type="text"
                                className="search__input"
                                value={text}
                                onChange={(e) => setText(e.target.value)} />
                            <button className="search__btn" onClick={searchHandler}>Search</button>
                            <button
                                onClick={clearFilter}
                                className="clear sm">❌</button>
                        </div>
                    </div>
                    {listOfRestaurants?.length !== 0 ?
                        <>
                            <h2 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>Best restaurants for you</h2>
                            <div className="restro__container">
                                {listOfRestaurants?.map((restaurant) => {
                                    return (
                                        <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant.info.id}>
                                            <RestaurantCard restaurant={restaurant} />
                                        </Link>
                                    )
                                })}
                            </div>
                        </>
                        : <h1 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>No records.</h1>}
                </div>
            )}
        </>
    )
}

export default AppBody;