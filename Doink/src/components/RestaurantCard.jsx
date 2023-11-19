import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = restaurant.info;
    return (
        <div className="w-full rounded-md mb-10 shadow-2xl mx-auto hover:shadow-2xl hover:shadow-slate-500 hover:duration-300 transition-all">
            <div className="w-full h-[220px] relative object-cover rounded-tr-md rounded-tl-md">
                <div className="gradient"></div>
                <img src={IMG_URL + cloudinaryImageId} alt="" className="rounded-tr-md rounded-tl-md w-full h-full object-cover" />
            </div>
            <div className="mt-3 p-4">
                <div className="text-2xl font-bold">{name}</div>
                <div className="text-slate-700">{cuisines.join(", ")}</div>
                <div className="font-bold text-white bg-red-500 inline-block px-3 rounded-md py-[2px] my-2">{avgRating}⭐</div>
                <div className="">{costForTwo}</div>
                <div className="estimation">{restaurant.info.sla.deliveryTime} mins</div>
            </div>
        </div>
    )
}

export default RestaurantCard;