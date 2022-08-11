import "./SearchForm.css"

import searchIcon from '../../images/search.svg'
import searchButton from '../../images/SearchButton.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"


function SearchForm(props) {

    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <img className="searchForm__decoration" src={searchIcon} alt='Иконка поиска' />
                <input className="searchForm__input" onChange={props.searchMoviesHandler}  type="text" placeholder='Фильм' required />
                <label className="switch">
                    <FilterCheckbox />
                </label>
                <button className="searchForm__button" type="submit"><img className="searchButton__img" src={searchButton} alt='кнопка поиска' /></button>
            </form>
        </section>
    )

}

export default SearchForm;  
