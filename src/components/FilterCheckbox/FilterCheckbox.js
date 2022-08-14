import "./FilterCheckbox.css"

function FilterCheckbox({handleCheckbox}) {
    
    return (
        <>
        <div className="switch__box">
            <input className="checkbox" type="checkbox" onClick={handleCheckbox} />
                <span className="slider round"></span>
        </div>
        <p className="switch__text">Короткометражки</p>
        </>
    )
}

export default FilterCheckbox;
