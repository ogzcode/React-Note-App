import NoteSide from "./NoteSide";
import CreateNote from "./CreateNote";
import SelectedNote from "./SelectedNote";
import { useNote } from "../hooks/useNote";

function NoteApp() {
    const {selectedNote} = useNote();
    return (
        <div className='App'>
            <NoteSide/>
            <CreateNote />
            {
                selectedNote && 
                <SelectedNote 
                    name={selectedNote.name} 
                    note={selectedNote.note} 
                />
            }
        </div>
    );
}

export default NoteApp;