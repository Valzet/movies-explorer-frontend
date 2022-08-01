import logo from '../../images/logo.svg'
import "./Header.css";
function Header() {
    return (
        <header className="header">
           <img className='header__logo 'src={logo} alt='логотип'/>
            <div className='header__buttons'>
                <button className='header__button header__button_type_registration'>Регистрация</button>
                <button className='header__button header__button_type_authorization'>Войти</button>
            </div>
        </header>
    )
}
export default Header