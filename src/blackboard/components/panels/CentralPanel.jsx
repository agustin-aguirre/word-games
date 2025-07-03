import Stopwatch from "../timers/Stopwatch";


function CentralPanel({playedWordsTotal, totalWords, roundState, handleMidButtonClick}) {

    const innerBoxStyles = `h-full min-w-16`;

    return (
        <div className={`px-3 flex justify-between items-center`}>
            <div className={innerBoxStyles}>
                <p className="text-end cantata-one-regular">{playedWordsTotal}/{totalWords}</p>
            </div>
            <div className={innerBoxStyles}>
                <button 
                className={`
                    cursor-pointer
                    font-bold 
                    bg-white
                    rounded-2xl shadow-x1/20 shadow-sm
                    py-2 px-4
                `}
                onClick={handleMidButtonClick}
                >
                    {roundState === "idle" ? "Start" : "Shuffle"}
                </button>
            </div>
            <div className={innerBoxStyles + " cantata-one-regular"}>
                <Stopwatch />
            </div>
        </div>
    );
}


export default CentralPanel;