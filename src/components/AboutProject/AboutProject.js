import "./AboutProject.css"

function AboutProject(){
    return( 
        <section className="about-project" id='about-project'>
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-project__textblocks">
            <article className="about-project__textblock">
                <h3 className="about-project__textblock-title">Дипломный проект включал 5 этапов</h3>
                <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </article>
            <article className="about-project__textblock">
                <h3 className="about-project__textblock-title">На выполнение диплома ушло 5 недель</h3>
                <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </article>
            </div>
            <div className="about-project__scheme">
            <article className="about-project__backend-scheme">  
            <div className='about-project__backend'>1 неделя</div>
            <p className='about-project__backend-span'>Back-end</p>
            </article>
            <article className="about-project__frontend-scheme">  
            <div className='about-project__frontend'>4 недели</div>
            <p className='about-project__frontend-span'>front-end</p>
            </article>
            </div>
        </section>
     )
}

export default AboutProject