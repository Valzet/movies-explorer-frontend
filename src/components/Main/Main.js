import Promo from "../Promo/Promo"
import NavTab from "../NavTab/NavTab"
import AboutProject from "../AboutProject/AboutProject"
import Technology from "../Technology/Technology"
import AboutMe from "../AboutMe/AboutMe"
import Portfolio from "../Portfolio/Portfolio"
import Footer from '../Footer/Footer'
function Main() {
    return (
        <>
            <main className="main">
                <Promo />
                <NavTab />
                <AboutProject />
                <Technology />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>
    )
}

export default Main