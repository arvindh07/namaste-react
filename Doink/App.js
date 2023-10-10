import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "./logo.jpg";
import hotel from "./hotel.jpg";

// - Header
//     - Logo
//     - Nav items
// - Body
//     - Search
//     - Restaurant container
//         -- Restro card
// - Footer
//     - Copyright
//     - Links
//     - Address
//     - Contact

const Header = () => {
    return (
        <div className="header">
            <div className="logo__container">
                <img src={logo} alt="" className="logo"/>
                <span className="logo_text">DOINK</span>
            </div>
            <div className="nav_items">
                <ul className="nav__list">
                    <li className="nav__item">Home</li>
                    <li className="nav__item">About</li>
                    <li className="nav__item">Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restro__card">
            <div className="restro__banner">
                <img src={hotel} alt="" className="restro__banner__img" />
            </div>
            <div className="restro__content">
                <div className="name">Restro name</div>
                <div className="cuisine">Tamil Cuisine</div>
                <div className="rating">4.5⭐</div>
                <div className="estimation">30mins</div>
            </div>
        </div>
    )
}

const AppBody = () => {
    return (
        <div className="app__body">
            <div className="search__container">
                <input type="text" className="search__input" />
                <button className="search__btn">Search</button>
            </div>
            <h2 style={{marginLeft:"1em", marginTop: "1em"}}>Best restaurants for you</h2>
            <div className="restro__container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">copyrights @doink.com</div>
            <div className="links"></div>
            <div className="address"></div>
            <div className="contact"><b>Contact</b> - +91 - 1234567890</div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="container">
            <Header />
            <AppBody />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)