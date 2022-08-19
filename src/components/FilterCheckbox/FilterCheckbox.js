import "./FilterCheckbox.css"

function FilterCheckbox({ handleCheckbox, checkBoxActive }) {

    return (
        <>
            <div className="switch__box">
                <input className="checkbox" type="checkbox"
                    onChange={handleCheckbox}
                    checked={checkBoxActive ? true : false} />
                <span className="slider round"></span>
            </div>
            <p className="switch__text">Короткометражки</p>
        </>
    )
}

export default FilterCheckbox;
