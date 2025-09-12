export default function InputActionButton({name, symbolName, onClick}) {
    return (
        <button
        name={name} 
        className={`p-0 m-0 h-full w-full
            hover:text-amber-300 cursor-pointer
            flex items-center justify-center`}
        type="button" 
        onClick={onClick} 
        >
            <span className="material-symbols-outlined">
                {symbolName}
            </span>
        </button>
    );
}

