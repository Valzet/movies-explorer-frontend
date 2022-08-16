import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'

function Movies({searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete}) {
    return (
        <>
            <MoviesCardList searchedMovies={searchedMovies} userSavedMovies={userSavedMovies} handleSaveMovie={handleSaveMovie} handleMovieDelete={handleMovieDelete} />
            <Footer />
        </>
    )
}

export default Movies