import { Link, useLocation } from "react-router-dom";
import "./Navigation.css"
import useMediaQuery from "../../hooks/useMediaQuery";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation({ loggedIn }) {
    const path = useLocation();
    const isDesktop = useMediaQuery('(min-width: 769px)');

    function changeLocationTextColor() {
        switch (path.pathname) {
            case '/':
                return ('profile__span_type_main');
            default:
                return ('profile__span');
        }
    }

    function useRouteRight() {
        if (!loggedIn) {
            return (<nav className='navigation__rightSide'>
                <Link className='navigation__registration' to='signup'>Регистрация</Link>
                <Link className='navigation__authorization' to='signin'>Войти</Link>
            </nav>)
        } else {
            return (<nav className="navigation__rightSide">
                {isDesktop ? <Link className='profile' to='profile'><p className={handleProfileLink()}>Аккаунт</p><div className={changeLocationTextColor()}><div className="profile__img"></div></div></Link> : <BurgerMenu />}
            </nav>)
        }
    }

    function handleProfileLink() {
        switch (path.pathname) {
            case '/profile':
                return ('profile profile_type_active');
            default:
                return ('profile');
        }
    }

    function handleMovieLink() {
        switch (path.pathname) {
            case '/movies':
                return ('navigation__movies navigation__movies_type_active');
            default:
                return ('navigation__movies');
        }
    }
    function handleSavedMovieLink() {
        switch (path.pathname) {
                case '/saved-movies':
                return ('navigation__movies navigation__movies_type_active');
            default:
                return ('navigation__movies');
        }
    }

    function useRouteLeft() {
        if (!loggedIn) {
            return;
        } else {
            return (<div className={isDesktop ? "navigation__movies-links" : "navigation__mobile"}>
                <Link className={handleMovieLink()} to='movies'>Фильмы</Link>
                <Link className={handleSavedMovieLink()} to='saved-movies'>Сохраненные фильмы</Link>
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
