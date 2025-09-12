export default function ActionButton({word, disabled, onClick}) {

    const disabledStyle = "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:shadow-none"
    
    return (
        <button 
        className={`
            cursor-pointer font-bold bg-white
            rounded-2xl shadow-x1/20 shadow-sm
            py-2 px-4
            ${(disabled ?? false) ? disabledStyle : ''}
        `}
        onClick={onClick}
        disabled={disabled ?? false}
        >
            {word}
        </button>
    );
}