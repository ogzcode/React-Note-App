import "./CreateNote.css";
import { useState } from "react";

function CreateNote({ onClick = f => f}) {
    const [noteName, setName] = useState("");
    const [note, setNote] = useState("");

    const handleClick = (e) => { 
        e.preventDefault();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        onClick({"name": noteName, "note": note, "date": `${day}.${month}.${year}`});
        setName("");
        setNote("");
    };
    return (
        <div className='create__note'>
            <h1 className='app__name'>Note App</h1>
            <form className='note__area' onSubmit={handleClick}>
                <div className='note__name'>
                    <input 
                        value={noteName} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder='Enter your note name...' 
                        required
                    />
                    <button className='create__btn'>Create</button>
                </div>
                <textarea 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                    className='textarea' 
                    placeholder='Create your note' 
                    required
                />
            </form>
        </div>
    );
}

export default CreateNote;