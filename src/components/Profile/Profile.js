import './Profile.css'
import Header from '../Header/Header'

function Profile() {
    return (
        <>
            <Header />
            <form className='profile__form'>
                <h2 className='profile__title'>Привет, 'Имя'! </h2>
                <div className='profile__inputs'>
                    <div className='profile__input-area'>
                        <p className='profile__subtext'>Имя</p>
                        <input className='profile__input' placeholder='имя_пользователя' />
                    </div>
                    <div className='profile__input-area'>
                        <p className='profile__subtext'>E-mail</p>
                        <input className='profile__input' placeholder='E-mail_пользователя' />
                    </div>
                </div>

                <div className='form__buttons'>
                    <button type='submit' className='form__button form__buttons_type_edit'>Редактировать</button>
                    <button type='submit' className='form__button form__buttons_type_logout'>Выйти из аккаунта</button>
                </div>

            </form>

        </>
    )
}

export default Profile;
