import "./blackboard-game.css";
import PlayerInput from "./components/PlayerInput"
import PlayedLetters from "./components/PlayedLetters";
import PlayedWords from "./components/PlayedWords"

import {rounds} from "./data/data";


function BlackboardGame() {

    const round = rounds["1"];

    function onPlayerInput({word}) {

    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        if (round.words[length].includes(word)) {
            console.log("SÍ")
        }
        else{
            console.log("NO")
        }
    }

    return (
        <div>
            <h1>
                "The Blackboard Game"
            </h1>
            <div className="game-loop-container">
                <PlayerInput onChange={onPlayerInput} onSubmit={onPlayerSubmitWord} />
                <PlayedLetters />
                <PlayedWords 
                played={
                    {
                        3: ["AMO", "ESA", "ESO", "LOA", "MAL"], 
                        4: ["LEMA", "LOMA", "LOSA"], 
                        5:[], 
                        6:["MELOSA"] 
                    }} 
                all={round.words}
                />
            </div>
        </div>
    );
}


export default BlackboardGame;