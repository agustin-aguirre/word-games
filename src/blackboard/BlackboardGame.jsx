import { useState } from "react";
import usePlayerRoundStore from "./stores/playerRound";
import useRoundConfigStore from "./stores/roundConfig";
import { getRoundConfig } from "./services/rounds";
import GameTitle from "./components/titles/GameTitle";
import Game from "./components/Game";
import EndgameSplash from "./components/splashes/EndgameSplash";


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
        <>
            <div className="m-0 p-0 self-center rounded-2xl">
                <GameTitle value={"El Juego del Pizarrón"}/>
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
            <div className="absolute z-11 w-full min-w-2/5 max-w-11/12 flex align-middle justify-center">
                <div className="w-full">
                    <EndgameSplash show={roundState === "finished"}/>
                </div>
            </div>
        </>
    );
}


export default BlackboardGame;