import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"
import useMediaQuery from "../../hooks/useMediaQuery";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation() {
    const path = useLocation();
    const isDesktop = useMediaQuery('(min-width: 769px)');

    function useRouteRight() {
        switch (path.pathname) {
            case '/':
                return (<nav className='navigation__rightSide'>
                    <Link className='navigation__registration' to='signup'>Регистрация</Link>
                    <Link className='navigation__authorization' to='signin'>Войти</Link>
                </nav>);
            default:
                return (<nav className="navigation__rightSide">
                    {isDesktop ? <Link className='profile' to='profile'>Аккаунт<div className="profile__span"><div className="profile__img"></div></div></Link> : <BurgerMenu />}
                </nav>)
        }
    }
    function useRouteLeft() {
        switch (path.pathname) {
            case '/':
                return;
            default:
                return (<div className={isDesktop ? "navigation__movies-links" : "navigation__mobile"}>
                    <Link className='navigation__movies' to='movies'>Фильмы</Link>
                    <Link className='navigation__saved-movies' to='saved-movies'>Сохраненные фильмы</Link>
                </div>);
        }
    }
    return (
        <div className='navigation'>

            <div className="navigation__leftSide">
                <Link className="header__logo" to="/"></Link>
                {useRouteLeft()}
            </div>
            {useRouteRight()}
        </div>)
}

export default Navigation;
