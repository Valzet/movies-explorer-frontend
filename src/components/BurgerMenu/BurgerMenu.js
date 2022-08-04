import "./BurgerMenu.css"
import { useState } from "react";
import { Link,
    //  useLocation 
    } from "react-router-dom";

function BurgerMenu() {

    // const path = useLocation();

    // function useCurrentLocation() {
    //     switch (path.pathname) {
    //         case '/profile':
    //             return ("burger__link-underline");
    //         case '/movies':
    //             return ("burger__link-underline");
    //         case '/saved-movies':
    //             return ("burger__link-underline");
    //         default:
    //             return ("burger__link")
    //     }
    // }
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    function handleOpenBurger() {
        setBurgerOpen(true)
        console.log(`open`)
    }

    function handleCloseBurger() {
        setBurgerOpen(false)
        console.log(`close`)
    }

    return (<>
        <button className="BurgerButton" onClick={handleOpenBurger}></button>
        <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
            <div className="burger__container">
                <button className="burger__buttonClose" onClick={handleCloseBurger}>
                </button>
                <nav className="burger__navigation">
                    <div className="burger__links">
                        <Link className="burger__link" to='/'>Главная</Link>
                        <Link className="burger__link" to='movies'>Фильмы</Link>
                        <Link className="burger__link" to='saved-movies'>Сохраненные фильмы</Link>
                    </div>
                    <div className="burger__profile">
                        <Link className='profile' to='profile'>Аккаунт<div className="profile__span"><div className="profile__img"></div></div></Link>
                    </div>
                </nav>
            </div>

        </div>
    </>
    )
}

export default BurgerMenu;
