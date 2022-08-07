import "./Header.css";
import Navigation from "../Navigation/Navigation"
import React from 'react';
import { useLocation } from "react-router-dom";
function Header() {
    const path = useLocation();
    const headerBackground = () => path.pathname === '/' ? 'header' : 'header__main';

    return (
        <header className={headerBackground()}>
            <Navigation />
        </header>
    )

}
export default Header