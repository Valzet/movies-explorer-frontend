
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav className='navigation'>
            <Link className='navigation__registration' to='signup'>Регистрация</Link>
            <Link className='navigation__authorization' to='signin'>Войти</Link>
        </nav>)
}

export default Navigation;
