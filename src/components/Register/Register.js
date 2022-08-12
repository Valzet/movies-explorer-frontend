import { Link } from "react-router-dom";
import "./Register.css"
import {useState} from "react";

function Register(props) {
    const [formParams, setFormParams] = useState({
        name: '',
        email: '',
        password: ''
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
        let { name, email, password } = formParams;
        props.handleRegister( name, email, password )
        console.log(name, email, password )
      }
    return (
        <form className="register" onSubmit={handleSubmit}>
            <Link className="header__logo" to="/"></Link>
            <h2 className="register__title">Добро пожаловать!</h2>
            <div className='register__inputs'>
                <div className='register__input-area'>
                    <p className='register__subtext'>Имя</p>
                    <input className='register__input' id="name" name="name" type="name" onChange={handleChange} required />
                </div>
                <div className='register__input-area'>
                    <p className='register__subtext'>E-mail</p>
                    <input className='register__input' id="email" name="email" type="email" onChange={handleChange} required />
                </div>
                <div className='register__input-area'>
                    <p className='register__subtext'>Пароль</p>
                    <input className='register__input' name="password" type='password' onChange={handleChange} required />
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
