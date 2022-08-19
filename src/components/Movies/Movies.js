import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import SearchForm from "../SearchForm/SearchForm"
import Header from "../Header/Header"

function Movies({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete, searchMoviesHandler, handleCheckbox, loggedIn, getMovies, isLoading, checkBoxActive, searchInput }) {
    return (
        <>
            <Header loggedIn={loggedIn} />
            <SearchForm searchMoviesHandler={searchMoviesHandler} handleCheckbox={handleCheckbox} getMovies={getMovies} checkBoxActive={checkBoxActive} searchInput={searchInput}></SearchForm>
            <MoviesCardList searchedMovies={searchedMovies} userSavedMovies={userSavedMovies} handleSaveMovie={handleSaveMovie} handleMovieDelete={handleMovieDelete} isLoading={isLoading} />
            <Footer />
        </>
    )
}

export default Movies