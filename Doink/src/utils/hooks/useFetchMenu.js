import { useEffect, useState } from "react";
import { RESTAURANT_URL } from '../../utils/constants';
import { useNavigate } from "react-router-dom";

const useFetchMenu = (hotelId) => {
    const [hotelInfo, setHotelInfo] = useState({});
    const [menuItems, setMenuItems] = useState([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch(RESTAURANT_URL + hotelId );
            const json = await response.json();
            if(json?.data?.statusMessage === "done successfully"){
                setHotelInfo(json?.data?.cards?.[0]?.card?.card?.info);
                const filteredMenuItems = json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
                    ?.filter((menu) => menu?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
                setMenuItems(filteredMenuItems);
            }else{
                throw Error("Data not found");
            }
        } catch (error) {
            throw Error("Data not found", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return [menuItems, hotelInfo];
}

export default useFetchMenu;