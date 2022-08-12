import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Movies(props) {
    return (
        <>
            <Header />
            <SearchForm  searchMoviesHandler={props.searchMoviesHandler}/>
            <MoviesCardList filteredMovies={props.filteredMovies} />
            <Footer />
        </>
    )
}

export default Movies