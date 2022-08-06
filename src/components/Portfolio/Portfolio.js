import "./Portfolio.css"

function Portfolio() {
    return (
        <section className="portfolio">
            <div className="portfolio__content">
                <h2 className="portfolio__title">Портфолио</h2>
                <ul className="portfolio__list">
                    <a className="portfolio__links" href="https://valzet.github.io/how-to-learn/" target="_blank" rel="noreferrer"> <li className="portfolio__link" >Статичный сайт</li><p className="portfolio__decorate">&#8594;</p></a>
                    <a className="portfolio__links" href="https://valzet.github.io/russian-travel/" target="_blank" rel="noreferrer"> <li className="portfolio__link">Адаптивный сайт</li> <p className="portfolio__decorate">&#8594;</p></a>
                    <a className="portfolio__links" href="https://github.com/Valzet/react-mesto-api-full" target="_blank" rel="noreferrer"><li className="portfolio__link">Одностраничное приложение</li><p className="portfolio__decorate">&#8594;</p></a>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;
