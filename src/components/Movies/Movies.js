import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import { useState, useEffect } from "react";
import Header from '../Header/Header'
import { MovieApi } from "../../utils/MoviesApi";
import Footer from '../Footer/Footer'

function Movies() {
    const [movies, setMovies] = useState([]);
    function getMovies() {
        MovieApi.getMovies()
            .then((data) => {
                setMovies(data);
                localStorage.setItem('movies', JSON.stringify(data));
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getMovies();
    }, [])

    const [searchInput, setSearchInput] = useState("");

    const searchMoviesHandler = (event) => {
        const search = event.target.value.toLowerCase();
        setSearchInput(search);
    };

    const filteredMovies = movies.filter((movie) => {
       return  movie.nameRU.toLowerCase().includes(searchInput);
    });


    return (
        <>
            <Header />
            <SearchForm  searchMoviesHandler={searchMoviesHandler}/>
            <MoviesCardList movies={filteredMovies} />
            <Footer />
        </>
    )
}

export default Movies