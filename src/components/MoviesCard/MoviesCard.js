import "./MoviesCard.css"
import {useState} from "react";

function Card(props) {
  const [isSaved, setSavedCard] = useState();
  function handleLikeClick() {
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

