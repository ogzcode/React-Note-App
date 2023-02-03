import "./CreateNote.css";
import { useNote } from "../hooks/useNote";
import useInput from "../hooks/useInput";

function CreateNote() {
    const [noteName, resetName] = useInput("");
    const [note, resetNote] = useInput("");
    const { addNote } = useNote();

    const handleClick = (e) => {
        e.preventDefault();
        let date = new Date();
        addNote(
            {
                "name": noteName.value,
                "note": note.value,
                "date": `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
            }
        );
        resetName();
        resetNote();
    };
    return (
        <div className='create__note'>
            <h1 className='app__name'>Note App</h1>
            <form className='note__area' onSubmit={handleClick}>
                <div className='note__name'>
                    <input {...noteName} type="text" placeholder='Enter your note name...' required />
                    <button className='create__btn'>Create</button>
                </div>
                <textarea {...note} className='textarea' required />
            </form>
        </div>
    );
}

export default CreateNote;