import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header"

function Movies({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete, searchMoviesHandler, handleCheckbox, loggedIn }) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <SearchForm searchMoviesHandler={searchMoviesHandler} handleCheckbox={handleCheckbox} ></SearchForm>
            <MoviesCardList searchedMovies={searchedMovies} userSavedMovies={userSavedMovies} handleSaveMovie={handleSaveMovie} handleMovieDelete={handleMovieDelete} />
            <Footer />
        </>
    )
}

export default Movies