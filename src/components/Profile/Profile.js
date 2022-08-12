import './Profile.css'
import Header from '../Header/Header'

import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useState, useEffect } from "react";

function Profile(props) {
      // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser, props.isOpen]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser(
      name, email
    );
  }


    return (
        <>
            <Header />
            <form className='profile__form' >
                <h2 className='profile__title'>Привет, {name}! </h2>
                <div className='profile__inputs'>
                    <div className='profile__input-area'>
                        <p className='profile__subtext'>Имя</p>
                        <input className='profile__input' value={name || ''} onChange={handleNameChange} />
                    </div>
                    <div className='profile__input-area'>
                        <p className='profile__subtext'>E-mail</p>
                        <input className='profile__input' value={email || ''} onChange={handleEmailChange} />
                    </div>
                </div>
                <div className='form__buttons'>
                    <button type='submit' className='form__button form__buttons_type_edit' onClick={handleSubmit}>Редактировать</button>
                    <button type='submit' className='form__button form__buttons_type_logout' onClick={props.handleLogout}>Выйти из аккаунта</button>
                </div>

            </form>

        </>
    )
}

export default Profile;
