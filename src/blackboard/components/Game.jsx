import { useEffect } from "react";
import usePlayerInputStore from "../stores/playerInputs";
import usePlayerRoundStore from "../stores/playerRound";
import useRoundConfigStore from "../stores/roundConfig";
import PlayerInput from "./inputs/PlayerInput";
import PlayedLetters from "./letters/PlayedLetters";
import PlayedWords from "./words/PlayedWords";
import Stopwatch from "./timers/Stopwatch";
import "./game.css";


function Game() {

    const totalWords = useRoundConfigStore(state => state.totalWords);
    const allowedWords = useRoundConfigStore(state => state.allowedWords);
    const totalTime = useRoundConfigStore(state => state.totalTime);
    
    const roundState = usePlayerRoundStore(state => state.roundState);
    const playedWordsTotal = usePlayerRoundStore(state => state.totalEnteredWords);
    const addWord = usePlayerRoundStore(state => state.addWord);
    const timeElapsed = usePlayerRoundStore(state => state.timeElapsed);
    const startRound = usePlayerRoundStore(state => state.startRound);
    
    const setEnteredWord = usePlayerInputStore(state => state.setEnteredWord);
    const finishRound = usePlayerRoundStore(state => state.finishRound);


    useEffect(() => {
        if (timeElapsed >= totalTime || playedWordsTotal === totalWords) {
            finishRound();
        }
    }, [timeElapsed, playedWordsTotal])


    function onPlayerInput({word}) {
        setEnteredWord(word);
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = allowedWords[length].includes(word);
        isValidWord && addWord(word);
    }

    function handleMidButtonClick() {
        roundState === "idle" 
            ? startRound()
            : shuffleLetters();
    }

    return (
        <div className="game-loop-container">
            <PlayedWords/>
            <div className="central-container">
                <div>
                    <p>{playedWordsTotal}/{totalWords}</p>
                </div>
                <button onClick={handleMidButtonClick}>
                    {roundState === "idle" ? "Start" : "Shuffle"}
                </button>
                <Stopwatch />
            </div>
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters/>
        </div>
    );
}


export default Game;