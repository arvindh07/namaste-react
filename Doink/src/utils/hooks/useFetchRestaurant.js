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
        try {
            setLoading(true);
            const response = await fetch(ALL_RESTAURANTS_API_URL);
            const json = await response.json();
            if(json?.data?.statusMessage === "done successfully"){
                setLoading(false);
                setInitial(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setListOfRestaurants(json.data.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }else{
                throw Error("Data not found");
            }
        } catch (error) {
            throw Error("Data not found");
        }
    }

    return [listOfRestaurants];
}

export default useFetchRestaurant;