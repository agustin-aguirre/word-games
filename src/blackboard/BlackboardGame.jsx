import { useState } from "react";
import usePlayerRoundStore from "./stores/playerRound";
import useRoundConfigStore from "./stores/roundConfig";
import { getRoundConfig } from "./services/rounds";
import Game from "./components/Game";
import EndgameSplash from "./components/splashes/EndgameSplash";
import "./blackboard-game.css";


function BlackboardGame() {

    const [roundNumber, setRoundNumber] = useState(1);
    const loadRoundConfig = useRoundConfigStore(state => state.load);
    const roundState = usePlayerRoundStore(state => state.roundState);
    const setPlayerRoundNumber = usePlayerRoundStore(state => state.setRound);
    const resetRound = usePlayerRoundStore(state => state.resetRound);

    function moveToNextRound(direction) {
        const newRoundNumber = roundNumber + direction;
        setRoundNumber(newRoundNumber);
        loadRoundConfig(newRoundNumber, getRoundConfig(newRoundNumber));
        resetRound();
        setPlayerRoundNumber(newRoundNumber);
    }

    return (
        <div className="game-loop-container">
            <h1 className="text-2xl font-bold">"The Blackboard Game"</h1>
            <EndgameSplash show={roundState === "finished"}/>
            <Game />
            {
                roundState !== "playing" &&
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
            }
        </div>
    );
}


export default BlackboardGame;