import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
    return (
        <form className="login">
            <Link className="header__logo" to="/"></Link>
            <h2 className="login__title">Рады видеть!</h2>

            <div className='login__inputs'>
                <div className='login__input-area'>
                    <p className='login__subtext'>E-mail</p>
                    <input className='login__input' id="email" name="email" type="email" required />
                </div>
                <div className='login__input-area'>
                    <p className='login__subtext'>Пароль</p>
                    <input className='login__input' name="password" type='password' required />
                </div>
            </div>

            <div className='login__buttons'>
                <button type='submit' className='login__button login__buttons_type_login'>Войти</button>
                <div className="login__button-login">
                    <p className="login__buttons_type_text">Ещё не зарегистрированы?</p> <button type='submit' className='login__button login__buttons_type_register'>Регистрация</button>
                </div>
            </div>

        </form>)
}

export default Login;
