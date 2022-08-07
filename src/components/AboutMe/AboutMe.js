import "./AboutMe.css"
import student from '../../images/student.svg'

function AboutMe() {
    return (
        <section className="aboutMe" id="Student">
            <div className="aboutMe__block">
                <h2 className="aboutMe__title">Студент</h2>
                <div className="aboutMe__content">
                    <article className="aboutMe__student">
                        {/* <div className="aboutMe__main-info"> */}
                        <h2 className="aboutMe__name">Виталий</h2>
                        <p className="aboutMe__profession">Фронтенд-разработчик, 30 лет</p>
                        <p className="aboutMe__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
                            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        {/* </div> */}

                        <div className="aboutMe__contacts">
                            <a className="aboutMe__link" href="fafa.com">Facebook</a>
                            <a className="aboutMe__link" href="fafa.com">Github</a>
                        </div>
                    </article>
                    <img className="aboutMe__photo" src={student} alt='студент' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;