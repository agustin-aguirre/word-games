import "./blackboard-game.css";
import PlayerInput from "./components/PlayerInput"
import PlayedLetters from "./components/PlayedLetters";
import PlayedWords from "./components/PlayedWords"


function BlackboardGame() {
    return <>
    <div>
        <h1>
            "The Blackboard Game"
        </h1>
        <div className="game-loop-container">
            <PlayerInput />
            <PlayedLetters />
            <PlayedWords />
        </div>
    </div>
    </>
}


export default BlackboardGame;