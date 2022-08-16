import "./MoviesCard.css"
import {useEffect, useState} from "react";

function Card(props) {
  const [isSaved, setSavedCard] = useState(false);
  const [movieId, setMovieId] = useState('');
  useEffect(() => {
    props.userSavedMovies.map((c) => {
      if(c.movieId === props.movies.id) {
        setSavedCard(true)
        setMovieId(c._id)
        console.log(c._id)
      } else if (c.movieId === props.movies.movieId){
        setSavedCard(false)
      }})
  }, [props.userSavedMovies])



  function saveMovie() {
    if(!isSaved) {
      props.handleSaveMovie(props.movies)
    } else {
      props.handleMovieDelete(movieId)
      console.log(movieId)
    }
  }

  function handleLikeClick() {
    saveMovie();
    setSavedCard(!isSaved);
  }

  const cardLikeButtonClassName = `${isSaved ? 'item__liked' : 'item__addLike'}`;

  return (
    <li className="item" >
      <a className="item__image-link" target="_blank" rel="noreferrer" href={props.movies.trailerLink}>
      <img className="item__img" src={`https://api.nomoreparties.co${props.movies.image.url}`} alt={props.movies.nameRU} />
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

