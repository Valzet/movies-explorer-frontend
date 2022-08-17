import "./SavedMovies.css"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import { useEffect } from "react";

function Movies({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete, handleSavedMoviesSearch }) {

    useEffect(() => {
        handleSavedMoviesSearch()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    return (
        <>
            <MoviesCardList searchedMovies={searchedMovies} userSavedMovies={userSavedMovies} handleSaveMovie={handleSaveMovie} handleMovieDelete={handleMovieDelete} />
            <Footer />
        </>
    )
}

export default Movies 