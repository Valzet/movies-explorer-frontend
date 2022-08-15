import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'

function Movies({searchedMovies}) {
    return (
        <>
        <MoviesCardList searchedMovies={searchedMovies}  />
        <Footer />
        </>
    )
}

export default Movies 