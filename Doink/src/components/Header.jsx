import logo from "../../logo.jpg";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo__container">
                <img src={logo} alt="" className="logo" />
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

export default Header;