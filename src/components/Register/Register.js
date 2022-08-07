import { Link } from "react-router-dom";
import "./Register.css"

function Register() {
    return (
        <form className="register">
            <Link className="header__logo" to="/"></Link>
            <h2 className="register__title">Добро пожаловать!</h2>

            <div className='register__inputs'>
                <div className='register__input-area'>
                    <p className='register__subtext'>Имя</p>
                    <input className='register__input' id="name" name="name" type="name" required />
                </div>
                <div className='register__input-area'>
                    <p className='register__subtext'>E-mail</p>
                    <input className='register__input' id="email" name="email" type="email" required />
                </div>
                <div className='register__input-area'>
                    <p className='register__subtext'>Пароль</p>
                    <input className='register__input' name="password" type='password' required />
                </div>
            </div>

            <div className='register__buttons'>
                <button type='submit' className='register__button register__buttons_type_register'>Зарегистрироваться</button>
                <div className="register__button-login">
                    <p className="register__buttons_type_text">Уже зарегистрированы?</p><Link className='register__button register__buttons_type_login' to='signin'>Войти</Link>
                </div>
            </div>

        </form>
    )
}

export default Register;
