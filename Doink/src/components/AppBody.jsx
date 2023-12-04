import RestaurantCard, { withHighRatedRestaurantCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurant from "../utils/hooks/useFetchRestaurant";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/context/UserContext";

const AppBody = () => {
    const [text, setText] = useState("");
    const [listOfRestaurants] = useFetchRestaurant();
    const [localRes, setLocalRes] = useState([]);
    const [loading, setLoading] = useState(false);
    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h2 style={{ textAlign: "center", margin: "1em 0" }}>Oops! You dont have an internet connection. Please try again</h2>
    }

    const filterTopRated = () => {
        const filteredRes = localRes?.filter((res) => {
            if (res?.info?.avgRating > 4) {
                return res;
            }
        })
        setLocalRes(filteredRes);
    }

    const clearFilter = () => {
        setLocalRes(listOfRestaurants);
        setText("");
    }

    const searchHandler = () => {
        const searchRestros = listOfRestaurants?.filter((res) => {
            const resName = res.info.name.toLowerCase();
            if (resName.includes(text.toLowerCase())) {
                return res;
            }
        })
        setLocalRes(searchRestros);
    }

    useEffect(() => {
        if (listOfRestaurants?.length > 0) {
            setLoading(false);
            setLocalRes(listOfRestaurants);
        } else {
            setLoading(true);
        }
    }, [listOfRestaurants])

    // console.log("li -> ", listOfRestaurants);
    const HighRatedRestaurant = withHighRatedRestaurantCard(RestaurantCard);
    const {loggedInUsername, setUsername} = useContext(UserContext);

    return (
        <>
            {loading ? (
                <Shimmer />
            ) : (
                <div>
                    <div className="flex flex-col px-2 md:p-0 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col md:flex-row md:items-center">
                            <button
                                onClick={filterTopRated}
                                className="border-2 border-orange-400 bg-orange-400 px-2 py-[4px] mb-4 md:mr-6 md:mb-0 transition-bg duration-100 hover:bg-transparent">Top Rated Restaurants</button>
                            <button
                                onClick={clearFilter}
                                className="border-2 border-orange-400 px-2 py-1 ml:4 mb-4 md:mb-0 hover:bg-orange-400">Clear Filter  ❌</button>
                        </div>
                        <div className="flex my-2 justify-between md:justify-normal">
                            <div className="flex">
                                <input
                                    type="text"
                                    className="border-2 border-black rounded-md mr-4 p-1"
                                    value={text}
                                    onChange={(e) => setText(e.target.value)} />
                                <button className="bg-black border-2 border-black text-white mr-2 px-2 hover:bg-white hover:text-black" onClick={searchHandler}>Search</button>
                            </div>
                            <button
                                onClick={clearFilter}
                                className="border-2 border-black">❌</button>
                        </div>
                        <div className="flex my-2 justify-between md:justify-normal">
                            <div className="flex">
                                <input
                                    type="text"
                                    className="border-2 border-black rounded-md mr-4 p-1"
                                    value={loggedInUsername}
                                    onChange={(e) => setUsername(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    {localRes?.length !== 0 ?
                        <>
                            <h2
                                className="px-3 my-4 mr-2 text-2xl font-bold md:text-4xl md:px-0">Best restaurants for you</h2>
                            <div className="grid grid-cols-1 px-3 mx-auto mt-8 max-w-4/6 sm:grid-cols-2 sm:gap-x-4 sm:auto-rows-auto md:grid-cols-3 lg:grid-cols-4">
                                {localRes?.map((restaurant) => (
                                    <Link className="contents sm:max-w-3/6" to={`/restaurant/${restaurant?.info?.id}`} key={restaurant.info.id}>
                                        {restaurant?.info?.avgRating >= 4.4
                                            ? <HighRatedRestaurant restaurant={restaurant} />
                                            : <RestaurantCard restaurant={restaurant} />
                                        }
                                    </Link>
                                ))}
                            </div>
                        </>
                        : <h1 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>No records.</h1>}
                </div>
            )}
        </>
    )
}

export default AppBody;