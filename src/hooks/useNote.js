import { createContext, useState, useContext } from "react";

const NoteContext = createContext();
export const useNote = () => useContext(NoteContext);

export default function NoteProvider({ children }){
    const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem("notes")) || []);
    const [selectedNote, setSelect] = useState(null);

    const select = (id) => {
        setSelect(noteList.filter(note => note.id === id)[0]);
    };

    const deselect = () => setSelect(null);

    const addNote = (data) => {
        let lastId = 0;

        if (noteList.length > 0){
            lastId = noteList[noteList.length - 1].id + 1;
        }

        const newData = [...noteList, {
            id: lastId,
            ...data
        }];
        localStorage.setItem("notes", JSON.stringify(newData));
        setNoteList(newData);
    };

    const removeNote = (id) => {
        const newData = noteList.filter(note => note.id !== id);
        
        localStorage.setItem("notes", JSON.stringify(newData));
        setNoteList(newData);
    };

    return (
        <NoteContext.Provider value={{noteList, selectedNote, addNote, removeNote, select, deselect}}>
            { children }
        </NoteContext.Provider>
    );
}