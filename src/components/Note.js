import { FaTrash, FaPlus } from "react-icons/fa";
function Note({ name, date, onClick = f =>f}) {
    const handleClick = (state) => {
        onClick({"name": props.name, "state": state});
    };

    return (
        <div className='note'>
            <h2 className='note__head'>{name}</h2>
            <div className='note__bottom'>
                <p className='note__time'>{date}</p>
                <div className='note__btn--box'>
                    <button className='note__btn' onClick={() => handleClick(true)}>
                        <FaPlus/>
                    </button>
                    <button className='note__btn' onClick={() => handleClick(false)}>
                        <FaTrash/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Note;