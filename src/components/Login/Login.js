import "./Login.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
    // const [formParams, setFormParams] = useState({
    //     email: '',
    //     password: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormParams((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }));
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    function handlePasswordLogin(e) {
        if (e.target.value.length < 8) {
            setPasswordError("Минимальный пароль 8 символов")
        } else if (e.target.value.length >= 8) {
            setPasswordValid(true)
            setPasswordError("")
        }
        setPassword(e.target.value);
    }

    function handleEmailLogin(e) {
        let emailInputValue = /\S+@\S+\.\S+/.test(
            e.target.value)
        setEmailValid(emailInputValue)
        if (!emailInputValue) {
            setEmailError("Некорректно введен Email");
        } else {
            setEmailError("")
        }
        setEmail(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleLogin(email, password)
    }
    return (
        <form className="login" onSubmit={handleSubmit}>
            <Link className="header__logo" to="/"></Link>
            <h2 className="login__title">Рады видеть!</h2>
            <div className='login__inputs'>
                <div className='login__input-area'>
                    <p className='login__subtext'>E-mail</p>
                    <input className='login__input' id="email" name="email" type="email" onChange={handleEmailLogin} required />
                </div>
                <span className="profile__error-message ">
                    {emailError}
                </span>
                <div className='login__input-area'>
                    <p className='login__subtext'>Пароль</p>
                    <input className='login__input' name="password" type='password' onChange={handlePasswordLogin} required />
                </div>
                <span className="profile__error-message ">
                    {passwordError}
                </span>
            </div>
            <div className='login__buttons'>
                <button type='submit' className='login__button login__buttons_type_login'
                    disabled={
                        emailValid === false || passwordValid === false}>Войти</button>
                <div className="login__button-login">
                    <p className="login__buttons_type_text">Ещё не зарегистрированы?</p> <Link className='login__button login__buttons_type_register' to='signup'>Регистрация</Link>
                </div>
            </div>

        </form>)
}

export default Login;
