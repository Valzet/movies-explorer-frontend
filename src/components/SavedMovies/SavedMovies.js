import "./SavedMovies.css"

import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import { initialMovies } from '../../utils/constans.js'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Movies() {
    return (
        <>
        <Header /> 
        <SearchForm />
        <MoviesCardList initialMovies={initialMovies} />
        <Footer />
        </>
    )
}

export default Movies 