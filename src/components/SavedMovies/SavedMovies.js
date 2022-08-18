import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import { useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete, handleSavedMoviesSearch, loggedIn, searchMoviesHandler, handleCheckbox, checkBoxActive, searchInput }) {

    useEffect(() => {
        handleSavedMoviesSearch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Header loggedIn={loggedIn} />
            <SearchForm searchMoviesHandler={searchMoviesHandler} handleCheckbox={handleCheckbox} checkBoxActive={checkBoxActive} searchInput={searchInput} />
            <MoviesCardList searchedMovies={searchedMovies} userSavedMovies={userSavedMovies} handleSaveMovie={handleSaveMovie} handleMovieDelete={handleMovieDelete} />
            <Footer />
        </>
    )
}

export default Movies 