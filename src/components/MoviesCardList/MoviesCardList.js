import "./MoviesCardList.css"
import { useState, useEffect } from "react";
import MoviesCard from '../MoviesCard/MoviesCard'
import useMediaQuery from "../../hooks/useMediaQuery";

function MoviesCardList({ movies }) {
  const [cardsCount, setCardsCount] = useState({ moviesAmount: 12, additionalsMovies: 3 });
  const [movieList, setMovieList] = useState([]);

  const isDesktop = useMediaQuery('(min-width: 769px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)');

  function mediaQueryHooks() {
    if (isDesktop && !isMobile && !isTablet) {
      setCardsCount({ moviesAmount: 12, additionalsMovies: 3 })
    } else if (isTablet && !isMobile) {
      setCardsCount({ moviesAmount: 8, additionalsMovies: 2 })
    } else if (isMobile) {
      setCardsCount({ moviesAmount: 5, additionalsMovies: 2 })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener('resize', mediaQueryHooks);
    }, 100);
    return () => clearTimeout(timer);
  })

  useEffect(() => {
    setMovieList(movies.slice(0, cardsCount.moviesAmount));
  }, [cardsCount.moviesAmount, movies])


  function handleAddMoreCards() {
  }

  return (
    <section className="elements">
      <ul className="elements__list">
        {movieList.map((movies) => {
          return (<MoviesCard
            movies={movies}
            key={movies.id}
          />)
        }
        )}
      </ul>
      <button className="movie__aditionalCards" onClick={handleAddMoreCards}>Еще</button>
    </section>

  )
}

export default MoviesCardList