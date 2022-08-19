import "./AboutMe.css"
import student from '../../images/moe-photo.jpg'

function AboutMe() {
    return (
        <section className="aboutMe" id="Student">
            <div className="aboutMe__block">
                <h2 className="aboutMe__title">Студент</h2>
                <div className="aboutMe__content">
                    <article className="aboutMe__student">
                        <h2 className="aboutMe__name">Влад</h2>
                        <p className="aboutMe__profession">Фронтенд-разработчик, 29 лет</p>
                        <p className="aboutMe__description">Я родился на о.Сахалин, но живу в Санкт-Петербурге, закончил факультет Рекламы и связи с общественностью СПБУУЭ.
                            Люблю историю и мотоциклы.
                            Кодить впервые начал в рамках работы интернет-маркетолога, но решил идти дальше и вообще менять профессию, так как программирование меня увлекло</p>
                        <div className="aboutMe__contacts">
                            <a className="aboutMe__link" href="https://vk.com/vote2024" target="_blank" rel="noreferrer">VKontakte</a>
                            <a className="aboutMe__link" href="https://github.com/Valzet/" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </article>
                    <img className="aboutMe__photo" src={student} alt='студент' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;