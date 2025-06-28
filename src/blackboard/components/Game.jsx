import { useState } from "react";
import EndGameModal from "./endgame/EndgameModal";
import PlayerInput from "./inputs/PlayerInput";
import PlayedLetters from "./letters/PlayedLetters";
import PlayedWords from "./words/PlayedWords";
import Stopwatch from "./timers/Stopwatch";
import { useRoundConfig } from "../contexts/RoundConfigContext";
import { usePlayerRound } from "../contexts/PlayerRoundContext";


function Game() {
    
    const playerRound = usePlayerRound();
    const allowedWords = useRoundConfig().words;

    const [playedLetters, setPlayedLetters] = useState([]);


    function onPlayerInput({word}) {
        setPlayedLetters(word.split(""));
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = allowedWords[length].includes(word);
        isValidWord && playerRound.addGuessedWord(word);
    }

    return (
        <div className="game-loop-container">
            <EndGameModal show={playerRound.isPlaying}/>
            <Stopwatch />
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters played={playedLetters}/>
            <PlayedWords/>
            <div>
                <p>{playerRound.total}/{useRoundConfig().total}</p>
            </div>
        </div>
    );
}


export default Game;