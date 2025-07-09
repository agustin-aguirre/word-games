import usePlayerInputStore from "../../stores/playerInputs";
import Stopwatch from "../timers/Stopwatch";


function CentralPanel({playedWordsTotal, totalWords, roundState, handleMidButtonClick}) {

    const enteredWord = usePlayerInputStore(state => state.word);
    
    const isDisabled = () => enteredWord.length > 0;
    const disabledStyle = "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:shadow-none"

    return (
        <div className={`px-3 flex justify-between items-center`}>
            <div className="h-full min-w-16">
                <p className="text-end cantata-one-regular">{playedWordsTotal}/{totalWords}</p>
            </div>
            <div className="h-full min-w-16">
                <button 
                className={`
                    cursor-pointer font-bold bg-white
                    rounded-2xl shadow-x1/20 shadow-sm
                    py-2 px-4
                    ${isDisabled() ? disabledStyle : ''}
                `}
                onClick={handleMidButtonClick}
                disabled={isDisabled()}
                >
                    {roundState === "idle" ? "Start" : "Shuffle"}
                </button>
            </div>
            <div className={"h-full min-w-16 cantata-one-regular"}>
                <Stopwatch />
            </div>
        </div>
    );
}


export default CentralPanel;