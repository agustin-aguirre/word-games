import { useState } from "react";
import { RoundConfigProvider } from "./contexts/RoundConfigContext";
import { PlayerRoundProvider } from "./contexts/PlayerRoundContext";
import Game from "./components/Game";
import "./blackboard-game.css";


function BlackboardGame() {

    const [roundNumber, setRoundNumber] = useState(1);
    
    function moveToNextRound(direction) {
        const newRoundNumber = roundNumber + direction;
        setRoundNumber(newRoundNumber);
    }

    return (
        <div>
            <h1>"The Blackboard Game"</h1>
            <RoundConfigProvider roundNumber={roundNumber}>
            <PlayerRoundProvider key={roundNumber}>
                <Game />
            </PlayerRoundProvider>
            </RoundConfigProvider>
            <div style={{marginTop: "10px"}}>
                {
                    roundNumber - 1 > 0 && 
                        <button onClick={() => moveToNextRound(-1)}>Prev Round</button>
                }
                {
                    roundNumber + 1 < 6 &&
                        <button onClick={() => moveToNextRound(1)}>Next Round</button>
                }
            </div>
        </div>
    );
}


export default BlackboardGame;