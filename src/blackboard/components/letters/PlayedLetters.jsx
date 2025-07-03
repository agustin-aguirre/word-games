import usePlayerInputStore from "../../stores/playerInputs";
import useRoundConfigStore from "../../stores/roundConfig";
import "./played-letters.css";


function PlayedLetters() {

    const enteredChars = usePlayerInputStore(state => state.enteredChars);
    const allowedChars = useRoundConfigStore(state => state.allowedChars);

    return ( 
        <div>
            <ul className={`
                flex
                justify-between
                px-8
                py-4
                `}>
                {allowedChars.map((char, index) => {
                    const alreadyPlayed = enteredChars.includes(char);
                    const style = {
                        color: alreadyPlayed ? "transparent" : "inherit"
                    }
                    return (
                        <li key={index} style={{...style}}>
                            <button className="cursor-pointer rounded-2xl aspect-square text-2xl">
                                {char}
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}


export default PlayedLetters;