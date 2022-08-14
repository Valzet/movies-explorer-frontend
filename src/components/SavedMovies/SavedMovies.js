import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import { initialMovies } from '../../utils/constans.js'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Movies() {
    return (
        <>
        <Header /> 
        <MoviesCardList initialMovies={initialMovies} />
        <Footer />
        </>
    )
}

export default Movies 