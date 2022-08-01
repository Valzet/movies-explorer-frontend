import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__utils">
                <p className="footer__copyright">&copy; {(new Date().getFullYear())}</p>
                <div className="footer__links">
                    <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/valzet" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="footer__link" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    )
};
export default Footer;