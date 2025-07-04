function CharButton({id, char, isHidden, onClick}) {
    console.log(`${id} should be hidden? ${isHidden}`);
    return (
        <div className={isHidden? "opacity-0" : ""}>
            
            <button 
            { ...{ onClick: () => !isHidden && onClick(id, char)} }
            className={`
                rounded-2xl aspect-square text-2xl
                ${!isHidden ? 'hover:text-amber-300 cursor-pointer' : ''}
            `}>
                {char}
            </button>
        </div>
    )
}


export default CharButton;