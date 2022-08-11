import "./MoviesCard.css"
import {useState} from "react";

function Card({ movies }) {
  const [isLiked, setIsLiked] = useState(movies.isLiked);
  function handleLikeClick() {
    setIsLiked(!isLiked);
  }
  const cardLikeButtonClassName = `${isLiked ? 'item__liked' : 'item__addLike'}`;

  return (
    <li className="item" >
      <img className="item__img" src={`https://api.nomoreparties.co${movies.image.url}`} alt={movies.nameRU} />
      <button type="button" aria-label="Лайк" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
      <div className="item__about">
        <h2 className="item__title">{movies.nameRU}</h2>
        <p className="item__duration">{movies.duration}</p>
      </div>
    </li>
  )

}

export default Card;

