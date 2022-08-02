import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation"
function Header() {
    return (
        <header className="header">
            <div className='header__content'>
                <Link className="header__logo" to="/"></Link>
                <Navigation />
                
            </div>
        </header>
    )
}
export default Header