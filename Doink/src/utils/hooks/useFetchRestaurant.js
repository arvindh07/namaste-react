import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_API_URL } from "../../utils/constants";

const useFetchRestaurant = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initial, setInitial] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(ALL_RESTAURANTS_API_URL);
        const json = await response.json();
        setLoading(false);
        // console.log("all ", json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setInitial(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return [loading, initial, listOfRestaurants, setListOfRestaurants];
}

export default useFetchRestaurant;