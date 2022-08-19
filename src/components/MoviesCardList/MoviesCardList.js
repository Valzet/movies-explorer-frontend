import "./MoviesCardList.css"
import { useState, useEffect } from "react";
import MoviesCard from '../MoviesCard/MoviesCard'
import useMediaQuery from "../../hooks/useMediaQuery";
import Preloader from '../Preloader/Preloader'


function MoviesCardList({ searchedMovies, userSavedMovies, handleSaveMovie, handleMovieDelete, isLoading }) {
  const [cardsCount, setCardsCount] = useState(12); //отображаемые карточки
  const [movieList, setMovieList] = useState([]); //список загруженных фильмов
  const [foundError, setFoundError] = useState('');
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

  useEffect(() => {
    onResize();
    return () => offResize();
  })

  function onResize() {
    window.addEventListener('resize', mediaQueryHooks);
  }

  function offResize() {
    window.removeEventListener('resize', mediaQueryHooks)
  }

  useEffect(() => {
    setMovieList(searchedMovies.slice(0, cardsCount));
    setFoundError('')
    if (searchedMovies.length === 0) {
      checkMovies()
      function checkMovies() {
        if (movieList.length === 0) {
          setFoundError('Упс, ничего не найдено..')
        } else if (movieList.length > 0) {
          setFoundError('')
        }
      }
    }
    if (!localStorage.getItem('allMovies')) {
      setFoundError('')
    }
  }, [cardsCount, searchedMovies, setMovieList, movieList.length])

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
      <span className="elements__foundError">{foundError}</span>

      {isLoading ? <Preloader /> :
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
        </ul>}
      {!isLoading ? <>
        {searchedMovies.length !== movieList.length ?
          <button className="movie__aditionalCards"
            onClick={handleAddMoreCards}
          >Еще</button> : ''}
      </> : ''}

    </section>


  )
}

export default MoviesCardList