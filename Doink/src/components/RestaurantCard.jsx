import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = restaurant.info;
    return (
        <div className="restro__card">
            <div className="restro__banner">
                <div className="gradient"></div>
                <img src={IMG_URL + cloudinaryImageId} alt="" className="restro__banner__img" />
            </div>
            <div className="restro__content">
                <div className="name">{name}</div>
                <div className="cuisine">{cuisines.join(", ")}</div>
                <div className="rating">{avgRating}⭐</div>
                <div className="cost">{costForTwo}</div>
                <div className="estimation">{restaurant.info.sla.deliveryTime} mins</div>
            </div>
        </div>
    )
}

export default RestaurantCard;