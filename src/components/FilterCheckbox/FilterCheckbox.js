import "./FilterCheckbox.css"

function FilterCheckbox() {
    return (
        <>
        <div className="switch__box">
            <input className="checkbox" type="checkbox" defaultChecked={true} />
                <span className="slider round"></span>
        </div>
        <p className="switch__text">Короткометражки</p>
        </>
    )
}

export default FilterCheckbox;
