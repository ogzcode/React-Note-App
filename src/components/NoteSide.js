import { useEffect, useState } from "react";
import Note from "./Note";
import "./NoteStyle.css"

function NoteSide(props) {
    const [note, setNote] = useState("");
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setData(props.data);
        if (note === "") {
            setFilterData(props.data);
        }
    }, [props.data]);

    function onChange(e) {
        setNote(e.target.value);

        if (e.target.value === "") {
            setFilterData(data);
            return;
        }

        const newData = props.data.filter((d) => {
            return d.name.includes(e.target.value);
        });

        setFilterData(newData);
    }
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
                    <Note name={d.name} date={d.date} key={i} onClick={props.onClick} />
                )
            }
        </div>
    );
}


export default NoteSide;