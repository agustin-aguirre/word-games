import PlaysStatus from "./components/PlaysStatus"
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
                <PlaysStatus />
            </div>
        </>
    );
}


export default BlackboardGame;