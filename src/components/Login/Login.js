import "../LoginandRegisterStyle/LogAndReg.css"
import { Link } from "react-router-dom";
import { useState } from "react";

function Login(props) {
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
        props.setIsErrorAuth(false)
        props.handleLogin(email, password)
    }
    return (
        <form className="auth" onSubmit={handleSubmit}>
            <Link className="header__logo" to="/"></Link>
            <h2 className="auth__title">Рады видеть!</h2>
            <div className='auth__inputs'>
                <div className='auth__input-area'>
                    <p className='auth__subtext'>E-mail</p>
                    <input className='auth__input' id="email" name="email" type="email" onChange={handleEmailLogin} required />
                </div>
                <span className="profile__error-message ">
                    {emailError}
                </span>
                <div className='auth__input-area'>
                    <p className='auth__subtext'>Пароль</p>
                    <input className='auth__input' name="password" type='password' onChange={handlePasswordLogin} required />
                </div>
                <span className="profile__error-message ">
                    {passwordError}
                </span>
            </div>
            <div className='auth__buttons'>
                <span className="auth-error">{props.isErrorAuth ? 'Возникла ошибка. Попробуйте еще раз' : ''}</span>
                <button type='submit' className='auth__button auth__buttons_type_login'
                    disabled={emailValid === false || passwordValid === false || props.isWaitingForRes === true}>Войти</button>
                <div className="auth__button-login">

                    <p className="auth__buttons_type_text">Ещё не зарегистрированы?</p> <Link className='auth__button auth__buttons_type_register' to='signup'>Регистрация</Link>
                </div>
            </div>

        </form>)
}

export default Login;
