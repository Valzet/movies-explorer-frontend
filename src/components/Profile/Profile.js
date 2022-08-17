import './Profile.css'
import React from "react";
import CurrentUserContext from '../../contexts/CurrentUserContext'
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Header from "../Header/Header";

function Profile(props) {
  let history = useHistory();
  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState();
  const [emailError, setEmailError] = useState("");
  const [nameValid, setNameValid] = useState();
  const [nameError, setNameError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true)
  const [successMsg, setSuccessMsg] = useState("");

  function handleEmailChange(e) {
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

  function handleNameChange(e) {
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

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(
      name, email
    );
    pushSuccessMsg()
    
    const timer = setTimeout(() => {
      history.goBack()
      setIsDisabled(true)
    }, 2500);
    return () => clearTimeout(timer);
  }

  function setDisabledStatus(e) {
    e.preventDefault();
    setIsDisabled(false)
  }

  function pushSuccessMsg() {
    setSuccessMsg("Данные успешно обновлены")
  }

  function cancelEdit() {
    setIsDisabled(true)
  }

  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <form className='profile__form' >
        <h2 className='profile__title'>Привет, {currentUser.name}! </h2>
        <div className='profile__inputs'>
          <div className='profile__input-area'>
            <p className='profile__subtext'>Имя</p>
            <input className='profile__input' value={name || ''} onChange={handleNameChange} disabled={isDisabled} />
          </div>
          <span className="profile__error-message">
            {nameError}
          </span>
          <div className='profile__input-area'>
            <p className='profile__subtext'>E-mail</p>
            <input className='profile__input' value={email || ''} onChange={handleEmailChange} disabled={isDisabled} />
          </div>
          <span className="profile__error-message ">
            {emailError}
          </span>
        </div>
        {isDisabled ? (<div className='form__buttons'><button type='submit' className='form__button form__buttons_type_edit' onClick={setDisabledStatus} >Редактировать</button>
          <button type='submit' className='form__button form__buttons_type_logout' onClick={props.handleLogout}>Выйти из аккаунта</button> </div>)
          : <><span className='form__message'>{successMsg}</span> <button className='form__save-button' type="submit" onClick={handleSubmit} disabled={
            nameValid === false ||
            emailValid === false ||
            (name === currentUser.name && email === currentUser.email)
          }>Сохранить</button> 
          <button onClick={cancelEdit} className='form__button form__buttons_type_logout'>Отмена</button>
          </>}

      </form>



    </>
  )
}

export default Profile;
