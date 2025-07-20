import usePlayerInputStore from "../../stores/playerInputs";
import ActionButton from "../buttons/ActionButton";
import Stopwatch from "../timers/Stopwatch";


function CentralPanel({playedWordsTotal, totalWords, roundState, handleMidButtonClick}) {

    const enteredWord = usePlayerInputStore(state => state.word);
    
    const isDisabled = () => enteredWord.length > 0;
    
    const disabledProps = () => {
        if (!isDisabled()) return {}
        return {
            disabled: true
        }
    }

    return (
        <div className={`px-3 flex justify-between items-center`}>
            <div className="h-full min-w-16">
                <p className="text-end cantata-one-regular">{playedWordsTotal}/{totalWords}</p>
            </div>
            <div className="h-full min-w-16">
                <ActionButton 
                word={roundState === "idle" ? "Start" : "Shuffle"} 
                {...disabledProps()}
                onClick={handleMidButtonClick}
                />
            </div>
            <div className={"h-full min-w-16 cantata-one-regular"}>
                <Stopwatch />
            </div>
        </div>
    );
}


export default CentralPanel;