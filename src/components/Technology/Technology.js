import "./Technology.css"

function Technology() {
    return (
        <section className="technology" id="Technology">
            <div className="technology__block">
            <h2 className="technology__title">Технологии</h2>

            <div className="technology__textblock">
                <h3 className="technology__textblock-title">7 технологий</h3>
                <p className="technology__textblock-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            </div>
            <ul className="technology__used-technology">
                <li className="technology__list">HTML</li>
                <li className="technology__list">CSS</li>
                <li className="technology__list">JS</li>
                <li className="technology__list">Git</li>
                <li className="technology__list">Express.js</li>
                <li className="technology__list">MongoDB</li>

            </ul>
            </div>
        </section>
    )
}

export default Technology;