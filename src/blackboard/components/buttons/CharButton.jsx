function CharButton({id, char, isVisible, onClick}) {
    return (
        <div className={isVisible? "opacity-0" : ""}>
            
            <button 
            { ...{ onClick: () => !isVisible && onClick(id, char)} }
            className={`
                rounded-2xl aspect-square text-2xl
                ${!isVisible ? 'hover:text-amber-300 cursor-pointer' : ''}
            `}>
                {char}
            </button>
        </div>
    )
}


export default CharButton;