import "./SearchForm.css"
import searchIcon from '../../images/search.svg'
import switchImg from '../../images/smalltumb.svg'
import searchButton from '../../images/SearchButton.svg'

function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <img className="searchForm__decoration" src={searchIcon} alt='Иконка поиска' />
                <input className="searchForm__input" placeholder='фильм' />


                <label className="switch">
                    <button className="switch__toogle">
                        <img className="searchForm__decoration_type_switch" src={switchImg} alt='переключатель' />
                    </button>
                    <p className="switch__text">Короткометражки</p>
                </label>
                <button className="searchForm__button"><img className="searchButton__img" src={searchButton} alt='кнопка поиска' /></button>


            </form>


        </section>
    )

}

export default SearchForm;
