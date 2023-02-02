function Note(props) {
    const handleClick = (state) => {
        props.onClick({"name": props.name, "state": state});
    };

    return (
        <div className='note'>
            <h2 className='note__head'>{props.name}</h2>
            <div className='note__bottom'>
                <p className='note__time'>{props.date}</p>
                <div className='note__btn--box'>
                    <button className='note__btn' onClick={() => handleClick(true)}>O</button>
                    <button className='note__btn' onClick={() => handleClick(false)}>S</button>
                </div>
            </div>
        </div>
    );
}

export default Note;