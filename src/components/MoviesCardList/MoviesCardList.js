import "./MoviesCardList.css"
import { useState, useEffect } from "react";
import MoviesCard from '../MoviesCard/MoviesCard'
import useMediaQuery from "../../hooks/useMediaQuery";

function MoviesCardList({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete }) {
  const [cardsCount, setCardsCount] = useState(12); //отображаемые карточки
  const [movieList, setMovieList] = useState([]); //список загруженных фильмов

  const isDesktop = useMediaQuery('(min-width: 769px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  function mediaQueryHooks() {
    if (isDesktop && !isMobile && !isTablet) {
      setCardsCount(12)
    } else if (isTablet && !isMobile) {
      setCardsCount(8)
    } else if (isMobile) {
      setCardsCount(5)
    }
  }

  useEffect(() => { //хук ресайза 
    const timer = setTimeout(() => {
      window.addEventListener('resize', mediaQueryHooks);
    }, 100);
    return () => clearTimeout(timer);
  })

  useEffect(() => { //хук количества отображаемых карточек
    // console.log(searchedMovies)
    setMovieList(searchedMovies.slice(0, cardsCount));
  }, [cardsCount, searchedMovies])

  function handleAddMoreCards() { //дополнительные карточки
    if (isDesktop && !isMobile && !isTablet) {
      setCardsCount(cardsCount + 3)
    } else if (isTablet && !isMobile) {
      setCardsCount(cardsCount + 2)
    } else if (isMobile) {
      setCardsCount(cardsCount + 2)
    }
  }

  return (
    <section className="elements">
      <ul className="elements__list">
        {movieList.map((movies) => {
          return (<MoviesCard
            userSavedMovies={userSavedMovies}
            handleSaveMovie={handleSaveMovie}
            handleMovieDelete={handleMovieDelete}
            movies={movies}
            key={movies.id || movies._id}
          />)
        }
        )}
      </ul>
      {searchedMovies.length !== movieList.length ?
        <button className="movie__aditionalCards"
          onClick={handleAddMoreCards}
        >Еще</button> : ''}
    </section>

  )
}

export default MoviesCardList