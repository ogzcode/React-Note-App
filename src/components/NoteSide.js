import { useEffect, useState } from "react";
import { useNote } from "../hooks/useNote";
import Note from "./Note";
import "./NoteStyle.css"

function NoteSide() {
    const { noteList } = useNote();
    const [note, setNote] = useState("");
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (note === "") {
            setFilterData(noteList);
        }
        else {
            filter(note);
        }
    }, [noteList]);

    function onChange(e) {
        setNote(e.target.value);

        if (e.target.value === "") {
            setFilterData(noteList);
            return;
        }
        filter(e.target.value);
    }

    const filter = (name) => {
        const newData = noteList.filter((d) => {
            return d.name.includes(name);
        });

        setFilterData(newData);
    };
    return (
        <div className='note__container'>
            <div className='search__note'>
                <label>Search Note</label>
                <input
                    type="text" value={note}
                    onChange={(e) => onChange(e)}
                    placeholder="Search your note..."
                />
            </div>
            {
                filterData.map((d, i) =>
                    <Note id={d.id} name={d.name} date={d.date} key={i} />
                )
            }
        </div>
    );
}


export default NoteSide;