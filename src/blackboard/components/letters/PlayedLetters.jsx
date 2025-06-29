import useRoundConfigStore from "../../stores/roundConfig";
import "./played-letters.css";


function PlayedLetters({ played }) {

    const allowedChars = useRoundConfigStore(state => state.allowedChars);

    return ( 
        <div className="played-letters-container">
            <ul>
                {allowedChars.map(char => {
                    const alreadyPlayed = played.includes(char);
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