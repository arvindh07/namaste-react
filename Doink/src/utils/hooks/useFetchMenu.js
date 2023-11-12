import { useEffect, useState } from "react";
import { RESTAURANT_URL } from '../../utils/constants';

const useFetchMenu = (hotelId) => {
    const [hotelInfo, setHotelInfo] = useState({});
    const [menuItems, setMenuItems] = useState([]);

    const fetchData = async () => {
        const response = await fetch(RESTAURANT_URL + hotelId);
        const json = await response.json();
        setHotelInfo(json?.data?.cards?.[0]?.card?.card?.info);
        setMenuItems(json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return [menuItems, hotelInfo];
}

export default useFetchMenu;