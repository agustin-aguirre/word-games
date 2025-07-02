function LetterButton({id, letter, onClick}) {
    return (
        <div>
            <button id={id} onClick={onClick}>
                {letter}
            </button>
        </div>
    )
}


export default LetterButton;