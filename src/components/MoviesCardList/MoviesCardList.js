import "./MoviesCardList.css"

import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({initialMovies}) {
  return (
    <section className="elements">
      <ul className="elements__list">
        {initialMovies.map((movies) => {
          return (<MoviesCard
            movies={movies}
            key={movies.movieId}
          />)
        }
        )}
      </ul>
      <button className="movie__aditionalCards">Еще</button>
    </section>

  )
}

export default MoviesCardList