import { Link } from "react-router-dom";
import logo from "../../logo.jpg";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

export const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo__container">
                <img src={logo} alt="" className="logo" />
                <span className="logo_text">DOINK</span>
            </div>
            <div className="nav_items">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li style={{ fontSize: "1.3rem" }}>
                        {onlineStatus ? "🟢" : "🔴"}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;