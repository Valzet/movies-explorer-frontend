import "./Login.css"
import { Link } from "react-router-dom";
import {useState} from "react";

function Login(props) {
    const [formParams, setFormParams] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormParams((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin({ email: formParams.email, password: formParams.password })
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <Link className="header__logo" to="/"></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <div className='login__inputs'>
                <div className='login__input-area'>
                    <p className='login__subtext'>E-mail</p>
                    <input className='login__input' id="email" name="email" type="email" onChange={handleChange} required />
                </div>
                <div className='login__input-area'>
                    <p className='login__subtext'>Пароль</p>
                    <input className='login__input' name="password" type='password' onChange={handleChange} required />
                </div>
            </div>
            <div className='login__buttons'>
                <button type='submit' className='login__button login__buttons_type_login'>Войти</button>
                <div className="login__button-login">
                    <p className="login__buttons_type_text">Ещё не зарегистрированы?</p> <Link className='login__button login__buttons_type_register' to='signup'>Регистрация</Link>
                </div>
            </div>

        </form>)
}

export default Login;
