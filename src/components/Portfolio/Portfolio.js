import "./Portfolio.css"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
               <li className="portfolio__links"> <a className="portfolio__link" href="wwww">Статичный сайт</a><p className="portfolio__decorate">&#8594;</p></li>
               <li className="portfolio__links"> <a className="portfolio__link" href="wwwww">Адаптивный сайт</a> <p className="portfolio__decorate">&#8594;</p></li>
               <li className="portfolio__links"><a className="portfolio__link" href="wwwwww">Одностраничное приложение</a><p className="portfolio__decorate">&#8594;</p></li>
            </ul>
        </section>
    )
}

export default Portfolio;