
import { Link } from "react-router-dom";
import "./Navigation.css"
import { useLocation } from "react-router-dom";

function Navigation() {
    const path = useLocation();

    function useRouteRight() {
        switch (path.pathname) {
            case '/':
                return (<nav className='navigation__rightSide'>
                    <Link className='navigation__registration' to='signup'>Регистрация</Link>
                    <Link className='navigation__authorization' to='signin'>Войти</Link>
                </nav>);
            default:
                return (<nav className='navigation__rightSide'>
                    <Link className='profile' to='profile'>Аккаунт<div className="profile__span"><div className="profile__img"></div></div></Link>
                </nav>)
        }
    }
    function useRouteLeft() {
        switch (path.pathname) {
            case '/':
                return;
            default:
                return (<>
                    <Link className='navigation__movies' to='movies'>Фильмы</Link>
                    <Link className='navigation__saved-movies' to='saved-movies'>Сохраненные фильмы</Link>
                </>);;
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
