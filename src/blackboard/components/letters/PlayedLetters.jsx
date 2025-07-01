import usePlayerInputStore from "../../stores/playerInputs";
import useRoundConfigStore from "../../stores/roundConfig";
import "./played-letters.css";


function PlayedLetters() {

    const enteredChars = usePlayerInputStore(state => state.enteredChars);
    const allowedChars = useRoundConfigStore(state => state.allowedChars);

    return ( 
        <div className="played-letters-container">
            <ul>
                {allowedChars.map(char => {
                    const alreadyPlayed = enteredChars.includes(char);
                    const style = {
                        color: alreadyPlayed ? "transparent" : "inherit"
                    }
                    return <li style={{...style}}>{char}</li>
                })}
            </ul>
        </div>
    );
}


export default PlayedLetters;