import "./MoviesCard.css"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Card(props) {
  const [isSaved, setSavedCard] = useState(false);
  const [movieId, setMovieId] = useState('');

  useEffect(() => {
    props.userSavedMovies.map((c) => {
      if (c.movieId === props.movies.id || props.movies.movieId) {
        setSavedCard(true)
        setMovieId(c._id)
      }
    })
  }, [props.userSavedMovies, props.movies.id, props.movies.movieId])

  function saveMovie() {
    if (!isSaved) {
      props.handleSaveMovie(props.movies, setMovieId)
    } else if (isSaved) {
      props.handleMovieDelete(props.movies._id || movieId)
      setSavedCard(false)
    }
  }
  function handleLikeClick() {
    saveMovie();
    setSavedCard(!isSaved);
  }

  const cardLikeButtonClassName = `${isSaved ? 'item__liked' : 'item__addLike'}`;
  const path = useLocation();

  return (
    <li className="item" >
      <a className="item__image-link" target="_blank" rel="noreferrer" href={props.movies.trailerLink}>
        <img className="item__img"
          src={path.pathname === '/movies' ? `https://api.nomoreparties.co${props.movies.image.url}` : `${props.movies.image}`}
          alt={props.movies.nameRU} />
      </a>
      <button type="button" aria-label="Лайк" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
      <div className="item__about">
        <h2 className="item__title">{props.movies.nameRU}</h2>
        <p className="item__duration">{props.movies.duration}</p>
      </div>
    </li>
  )

}

export default Card;

