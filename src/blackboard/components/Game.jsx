import { useEffect } from "react";
import usePlayerInputStore from "../stores/playerInputs";
import usePlayerRoundStore from "../stores/playerRound";
import useRoundConfigStore from "../stores/roundConfig";
import PlayerInputPanel from "./panels/PlayerInputPanel";
import PlayedWords from "./panels/PlayedWords";
import CentralPanel from "./panels/CentralPanel";

const timeAdditions = {
    3: 2,
    4: 4,
    5: 6,
    6: 8
}

function Game() {

    const totalWords = useRoundConfigStore(state => state.totalWords);
    const allowedWords = useRoundConfigStore(state => state.allowedWords);
    const totalTime = useRoundConfigStore(state => state.totalTime);
    const shuffleChars = useRoundConfigStore(state => state.shuffleChars);
    
    const roundState = usePlayerRoundStore(state => state.roundState);
    const playedWordsTotal = usePlayerRoundStore(state => state.totalEnteredWords);
    const addWord = usePlayerRoundStore(state => state.addWord);
    const timeElapsed = usePlayerRoundStore(state => state.timeElapsed);
    const setTime = usePlayerRoundStore(state => state.setTime);
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

    function onPlayerSubmitWord(word) {
        const length = word.length;
        if (length === 0) return;
        const isValidWord = allowedWords[length].includes(word);
        if (isValidWord && addWord(word)) {
            setTime(timeElapsed - timeAdditions[length]);
        }
    }

    function handleMidButtonClick() {
        roundState === "idle" 
            ? startRound()
            : shuffleChars();
    }

    return (
        <div className="flex flex-col gap-y-3 mt-2">
            <PlayedWords/>
            <CentralPanel 
            playedWordsTotal={playedWordsTotal}
            totalWords={totalWords}
            roundState={roundState}
            handleMidButtonClick={handleMidButtonClick}
            />
            <PlayerInputPanel 
            onPlayerInput={onPlayerInput}
            onPlayerSubmitWord={onPlayerSubmitWord}
            />
        </div>
    );
}


export default Game;