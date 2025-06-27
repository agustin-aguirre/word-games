import { useRoundConfig } from "../../contexts/RoundConfigContext";
import "./played-letters.css";


function PlayedLetters({ played }) {

    const allowedChars = useRoundConfig().letters;

    return ( 
        <div className="played-letters-container">
            <ul>
                {allowedChars.map(letter => {
                    const alreadyPlayed = played.includes(letter);
                    const style = {
                        color: alreadyPlayed ? "transparent" : "inherit"
                    }
                    return <li style={{...style}}>{letter}</li>
                })}
            </ul>
        </div>
    );
}


export default PlayedLetters;