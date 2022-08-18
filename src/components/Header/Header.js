import "./Header.css";
import Navigation from "../Navigation/Navigation"
import React from 'react';
import { useLocation } from "react-router-dom";
function Header({ loggedIn }) {
    const path = useLocation();
    const headerBackground = () => path.pathname === '/' ? 'header' : 'header__main';
    return (
        <header className={headerBackground()}>
            <Navigation loggedIn={loggedIn} />
        </header>
    )
}
export default Header