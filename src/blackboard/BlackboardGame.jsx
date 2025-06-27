import Game from "./components/Game";
import "./blackboard-game.css";

import { rounds } from "./data/data";
import { useState } from "react";


function BlackboardGame() {

    const [roundNumber, setRoundNumber] = useState(1);
    const [roundConfig, setRoundConfig] = useState(rounds[roundNumber]);
    
    function moveToNextRound(direction) {
        const newRoundNumber = roundNumber + direction;
        setRoundNumber(newRoundNumber);
        setRoundConfig(rounds[newRoundNumber]);
    }


    return (
        <div>
            <h1>
                "The Blackboard Game"
            </h1>
            <Game roundConfig={roundConfig} />
            <div style={{marginTop: "10px"}}>
                <button onClick={() => moveToNextRound(-1)}>Prev Round</button>
                <button onClick={() => moveToNextRound( 1)}>Next Round</button>
            </div>
        </div>
    );
}


export default BlackboardGame;