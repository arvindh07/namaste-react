import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUsername} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    console.log("c", cartItems, Object.keys(cartItems)?.length);
    return (
        <div className="flex flex-col shadow-xl py-3 mb-6 bg-white md:flex-row justify-between px-6">
            <div className="flex justify-center items-center">
                <img src={logo} alt="" className="w-10 text-center border-3 rounded-full" />
                <span className="font-bold text-xl px-2 text-orange-500">DOINK</span>
            </div>
            <div>
                <ul className="flex flex-col items-center md:flex-row">
                    <li className="p-4 font-bold hover:underline hover:duration-100 hover:text-orange-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 font-bold hover:underline hover:duration-100 hover:text-orange-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 font-bold hover:underline hover:duration-100 hover:text-orange-500">
                        <Link to="/cart">Cart - {Object.keys(cartItems)?.length}</Link>
                    </li>
                    <li className="p-4 font-bold hover:underline hover:duration-100 hover:text-orange-500">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-4 font-bold text-lg">
                        {onlineStatus ? "🟢" : "🔴"}{loggedInUsername}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;