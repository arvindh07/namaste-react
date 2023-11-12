import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/hooks/useFetchRestaurant";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const AppBody = () => {
    const [text, setText] = useState("");
    const [loading, initial, listOfRestaurants, setListOfRestaurants] = useFetchRestaurant();
    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return <h2 style={{ textAlign: "center", margin: "1em 0" }}>Oops! You dont have an internet connection. Please try again</h2>
    }

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

    const searchHandler = () => {
        const searchRestros = initial?.filter((res) => {
            const resName = res.info.name.toLowerCase();
            if (resName.includes(text.toLowerCase())) {
                return res;
            }
        })
        setListOfRestaurants(searchRestros);
    }

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