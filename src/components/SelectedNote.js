import "./SelectedNote.css";

function SelectedNote({name, note, onClose = f => f}) {
    return (
        <div className='see__note'>
            <div className='see__inner'>
                <h1>{name}</h1>
                <p>{note}</p>
                <button className='see__close' onClick={onClose}>X</button>
            </div>
        </div>
    );
}

export default SelectedNote;