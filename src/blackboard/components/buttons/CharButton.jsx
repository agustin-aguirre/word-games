const getVisibilityStyles = (isVisible) => isVisible ? 'hover:text-amber-300 cursor-pointer' : 'opacity-0';

function CharButton({id, value, isVisible, onClick}) {
    return (
        <button 
        onClick={() => isVisible && onClick(id, value)}
        className={`
            aspect-square min-h-15
            ${getVisibilityStyles(isVisible)}
        `}>
            <span className="h-full w-full text-3xl">
                {value}
            </span>
        </button>
    )
}


export default CharButton;