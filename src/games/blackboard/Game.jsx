import WordGuessesBoard from "./boards/WordGuessesBoard";
import ChalkboardPanel from "./panels/ChalkboardPanel";
import { getRoundConfig } from "../../services/rounds";
import "./game-global-styles.css";


const layoutStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    padding: "10px 0px",
}

function Game({ options }) {
    return (
        <div style={layoutStyle}>
            <WordGuessesBoard allowedWords={getRoundConfig(1).allowedWords} showAllWords={false}/>
            <ChalkboardPanel>
                <h1>hola</h1>
            </ChalkboardPanel>
        </div>
    );
}


export default Game;