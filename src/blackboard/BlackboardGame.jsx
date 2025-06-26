import "./blackboard-game.css";
import PlayerInput from "./components/PlayerInput"
import PlayedLetters from "./components/PlayedLetters";
import PlayedWords from "./components/PlayedWords"


function BlackboardGame() {
    return (
        <>
            <h1>
                "The Blackboard Game"
            </h1>
            <div>
                <PlayerInput />
                <PlayedLetters />
                <PlayedWords />
            </div>
        </>
    );
}


export default BlackboardGame;