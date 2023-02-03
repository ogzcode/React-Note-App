import { FaTrash, FaPlus } from "react-icons/fa";
import { useNote } from "../hooks/useNote";
function Note({ id, name, date}) {
    const {removeNote, select} = useNote();

    return (
        <div className='note'>
            <h2 className='note__head'>{name}</h2>
            <div className='note__bottom'>
                <p className='note__time'>{date}</p>
                <div className='note__btn--box'>
                    <button className='note__btn' onClick={() => select(id)}>
                        <FaPlus/>
                    </button>
                    <button className='note__btn' onClick={() => removeNote(id)}>
                        <FaTrash/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Note;