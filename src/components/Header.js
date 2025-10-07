import { LOGO_URL } from "./Constant";

const Header = () => {
    return <div className="header">
        <span className="logo-container">
            <img src={LOGO_URL}/>
        </span>
        <span className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </span>
    </div>
}
export default Header;