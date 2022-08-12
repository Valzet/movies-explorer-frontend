import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Footer from '../Footer/Footer'

function Movies(props) {
    return (
        <>
            <SearchForm  searchMoviesHandler={props.searchMoviesHandler}/>
            <MoviesCardList filteredMovies={props.filteredMovies} />
            <Footer />
        </>
    )
}

export default Movies