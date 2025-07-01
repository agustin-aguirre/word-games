import usePlayerInputStore from "../stores/playerInputs";
import usePlayerRoundStore from "../stores/playerRound";
import useRoundConfigStore from "../stores/roundConfig";
import PlayerInput from "./inputs/PlayerInput";
import PlayedLetters from "./letters/PlayedLetters";
import PlayedWords from "./words/PlayedWords";
import Stopwatch from "./timers/Stopwatch";


function Game() {

    const playedWordsTotal = usePlayerRoundStore(state => state.totalEnteredWords);
    const addWord = usePlayerRoundStore(state => state.addWord);
    const totalWords = useRoundConfigStore(state => state.totalWords);
    const allowedWords = useRoundConfigStore(state => state.allowedWords);
    const setEnteredWord = usePlayerInputStore(state => state.setEnteredWord);

    function onPlayerInput({word}) {
        setEnteredWord(word);
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = allowedWords[length].includes(word);
        isValidWord && addWord(word);
    }

    return (
        <div className="game-loop-container">
            <Stopwatch />
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters/>
            <PlayedWords/>
            <div>
                <p>{playedWordsTotal}/{totalWords}</p>
            </div>
        </div>
    );
}


export default Game;