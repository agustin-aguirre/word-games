import { useEffect, useState } from "react";
import { rounds as allRoundConfigs } from "./data/data";
import usePlayerRoundStore from "./stores/playerRound";
import useRoundConfigStore from "./stores/roundConfig";
import Game from "./components/Game";
import EndgameSplash from "./components/splashes/EndgameSplash";
import "./blackboard-game.css";
import { getRoundConfig } from "./services/rounds";


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
        <div>
            <h1>"The Blackboard Game"</h1>
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