import PlayedWords from "./components/PlayedWords"
import PlayedLetters from "./components/PlayedLetters";
import PlayerInput from "./components/PlayerInput"


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