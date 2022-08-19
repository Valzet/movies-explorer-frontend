import { Link } from "react-router-dom";
import "../LoginandRegisterStyle/LogAndReg.css"
import { useState } from "react";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  function handlePasswordRegistration(e) {
    if (e.target.value.length < 8) {
      setPasswordError("Минимальный пароль 8 символов")
    } else if (e.target.value.length >= 8) {
      setPasswordValid(true)
      setPasswordError("")
    }

    setPassword(e.target.value);
  }

  function handleEmailRegistration(e) {
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

  function handleNameRegistration(e) {
    let nameInputValue = /^[a-zA-Zа-яА-Я-]{2,30}/.test(
      e.target.value)
    setNameValid(nameInputValue)
    if (!nameInputValue) {
      setNameError("Некорректно введено имя")
    } else {
      setNameError("")
    }
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsErrorAuth(false)
    props.handleRegister(name, email, password)
  }
  return (
    <form className="auth" onSubmit={handleSubmit}>
      <Link className="header__logo" to="/"></Link>
      <h2 className="auth__title">Добро пожаловать!</h2>
      <div className='auth__inputs'>
        <div className='auth__input-area'>
          <p className='auth__subtext'>Имя</p>
          <input className='auth__input' id="name" name="name" type="name" onChange={handleNameRegistration} required />
        </div>
        <span className="profile__error-message ">
          {nameError}
        </span>
        <div className='auth__input-area'>
          <p className='auth__subtext'>E-mail</p>
          <input className='auth__input' id="email" name="email" type="email" onChange={handleEmailRegistration} required />
        </div>
        <span className="auth__error-message ">
          {emailError}
        </span>
        <div className='auth__input-area'>
          <p className='auth__subtext'>Пароль</p>
          <input className='auth__input' name="password" type='password' onChange={handlePasswordRegistration} required />
        </div>
        <span className="profile__error-message ">
          {passwordError}
        </span>
      </div>
      <div className='auth__buttons'>
        <span className="auth-error">{props.isErrorAuth ? 'Возникла ошибка. Попробуйте еще раз' : ''}</span>
        <button type='submit' className='auth__button register__buttons_type_register' disabled={
          nameValid === false || emailValid === false || passwordValid === false || props.isWaitingForRes === true}>Зарегистрироваться</button>
        <div className="register__button-login">
          <p className="register__buttons_type_text">Уже зарегистрированы?</p><Link className='register__button register__buttons_type_login' to='signin'>Войти</Link>
        </div>
      </div>

    </form>
  )
}

export default Register;
