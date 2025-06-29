import { shallow } from "zustand/shallow";
import usePlayerInputStore from "../stores/playerInputs";
import usePlayerRoundStore from "../stores/playerRound";
import useRoundConfigStore from "../stores/roundConfig";
import PlayerInput from "./inputs/PlayerInput";
import PlayedLetters from "./letters/PlayedLetters";
import PlayedWords from "./words/PlayedWords";
import Stopwatch from "./timers/Stopwatch";


function Game() {

    const { playedWordsTotal, addPlayedWord } = usePlayerRoundStore(state => ({
            playedWordsTotal: state.playedWordsTotal,
            addPlayedWord: state.addWord,
        },
        shallow
    ));
    const { totalWords, allowedWords } = useRoundConfigStore(state => ({
            totalWords: state.totalWords,
            allowedWords: state.allowedWords,
        },
        shallow
    ));
    const { enteredChars, setEnteredWord } = usePlayerInputStore(state => ({
            enteredChars: state.enteredChars,
            setEnteredWord: state.setEnteredWord,
        },
        shallow
    ));

    function onPlayerInput({word}) {
        setEnteredWord(word);
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = allowedWords[length].includes(word);
        isValidWord && addPlayedWord(word);
    }

    return (
        <div className="game-loop-container">
            <EndGameModal show={playerRound.isPlaying}/>
            <Stopwatch />
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters played={enteredChars}/>
            <PlayedWords/>
            <div>
                <p>{playedWordsTotal}/{totalWords}</p>
            </div>
        </div>
    );
}


export default Game;