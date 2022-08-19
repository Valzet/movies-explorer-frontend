import "./BurgerMenu.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);

    function handleOpenBurger() {
        setBurgerOpen(true)
    }

    function handleCloseBurger() {
        setBurgerOpen(false)
    }

    return (<>
        <button className="BurgerButton" onClick={handleOpenBurger}></button>
        <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
            <div className="burger__container">
                <button className="burger__buttonClose" onClick={handleCloseBurger}>
                </button>
                <nav className="burger__navigation">
                    <div className="burger__links">
                        <Link className="burger__link" to='/' onClick={handleCloseBurger}>Главная</Link>
                        <Link className="burger__link" to='movies' onClick={handleCloseBurger}>Фильмы</Link>
                        <Link className="burger__link" to='saved-movies' onClick={handleCloseBurger}>Сохраненные фильмы</Link>
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

