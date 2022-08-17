import "./SearchForm.css"
import searchIcon from '../../images/search.svg'
import searchButton from '../../images/SearchButton.svg'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"


function SearchForm({ searchMoviesHandler, handleCheckbox }) {
    /* убрать кнопку. Заменить submit на onchange */

    function submitForm(event) {
        event.preventDefault()
    }
    return (
        <section className="searchForm">
            <form className="searchForm__form" onSubmit={submitForm} >
                <img className="searchForm__decoration" src={searchIcon} alt='Иконка поиска' />

                <input className="searchForm__input" type="text" onChange={searchMoviesHandler} placeholder='Фильм' required />
                <label className="switch">
                    <FilterCheckbox handleCheckbox={handleCheckbox} />
                </label>
                <button className="searchForm__button" type="submit"><img className="searchButton__img" src={searchButton} alt='кнопка поиска' /></button>
            </form>
        </section>
    )

}

export default SearchForm;  
