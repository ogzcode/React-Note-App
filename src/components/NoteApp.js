import { useState } from "react";
import NoteSide from "./NoteSide";
import CreateNote from "./CreateNote";
import SelectedNote from "./SelectedNote";

function NoteApp() {
    const [noteData, setNoteData] = useState([]);
    const [select, setSelect] = useState(null);

    const getData = (dataObject) => {
        setNoteData([...noteData, dataObject])
    };

    const handleClickData = (dataObject) => {
        console.log(dataObject);
        if (!dataObject.state) {
            const newData = noteData.filter((d) => {
                return d.name !== dataObject.name;
            });
            setNoteData(newData);
        }
        else {
            setSelect(noteData.filter((d) => {
                return d.name === dataObject.name;
            })[0]);
        }
    };


    return (
        <div className='App'>
            <NoteSide data={noteData} onClick={handleClickData} />
            <CreateNote onClick={getData} />
            {
                select && <SelectedNote name={select.name} note={select.note} onClose={() => setSelect(null)} />
            }
        </div>
    );
}

export default NoteApp;