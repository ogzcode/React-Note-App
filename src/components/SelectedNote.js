import { useNote } from "../hooks/useNote";
import "./SelectedNote.css";
import { FaTimes } from "react-icons/fa";

function SelectedNote({name, note}) {
    const {deselect} = useNote();
    return (
        <div className='see__note'>
            <div className='see__inner'>
                <h1>{name}</h1>
                <p>{note}</p>
                <button className='see__close' onClick={deselect}><FaTimes/></button>
            </div>
        </div>
    );
}

export default SelectedNote;