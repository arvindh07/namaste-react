import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const AppBody = () => {
    return (
        <div className="app__body">
            <div className="search__container">
                <input type="text" className="search__input" />
                <button className="search__btn">Search</button>
            </div>
            <h2 style={{ margin: "1em 0 1em 0.6em", fontSize: "2.2em" }}>Best restaurants for you</h2>
            <div className="restro__container">
                {resList?.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                    )
                })}
            </div>
        </div>
    )
}

export default AppBody;