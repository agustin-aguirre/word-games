import "./button-styles.css";


function ChalkboardButton({char, onClick}) {

    const handleClick = () => {
        onClick(char);
    }

    return (
        <button
            className="button char-button"
            onClick={handleClick}
        >
            <span>{char.toUpperCase()}</span>
        </button>
    )
}


export default ChalkboardButton;