import { useEffect, useState } from "react";
import { rounds as allRoundConfigs } from "./data/data";
import useRoundConfigStore from "./stores/roundConfig";
import usePlayerRoundStore from "./stores/playerRound";
import Game from "./components/Game";
import EndgameSplash from "./components/splashes/EndgameSplash";
import "./blackboard-game.css";


function BlackboardGame() {

    const [roundNumber, setRoundNumber] = useState(1);
    const loadConfig = useRoundConfigStore(state => state.load);
    
    useEffect(() => {
        loadConfig(roundNumber, allRoundConfigs[roundNumber]);
        usePlayerRoundStore(state => state.setRound)(roundNumber);
    }, [loadConfig, roundNumber])

    function moveToNextRound(direction) {
        const newRoundNumber = roundNumber + direction;
        setRoundNumber(newRoundNumber);
        loadConfig(newRoundNumber, allRoundConfigs[newRoundNumber]);
        usePlayerRoundStore(state => state.setRound)(newRoundNumber);
    }

    const showSplash = false;

    return (
        <div>
            <h1>"The Blackboard Game"</h1>
            <EndgameSplash show={showSplash}/>
            <Game />
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