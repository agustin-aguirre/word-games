import WordGuessesBoard from "./boards/WordGuessesBoard";
import InputsBoard from "./boards/InputsBoard";
import { getRoundConfig } from "../../services/rounds";
import "./game-global-styles.css";
import { useState } from "react";


const layoutStyle = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    padding: "10px 0px",
}

function Game() {

    const allowedWords = getRoundConfig(1).allowedWords;
    const totalWords = getRoundConfig(1).totalWords;
    const [_, setEnteredWords] = useState([]);
    const [assertedWords, setAssertedWords] = useState([]);

    const handleWordSubmitted = (word) => {
        setEnteredWords(prev => [...prev, word]);
        const wordLength = word.length;
        if (Object.keys(allowedWords).includes(wordLength.toString()) && allowedWords[wordLength].includes(word.toUpperCase())) {
            const newCorrectWords = [...assertedWords, word];
            setAssertedWords(newCorrectWords);
            console.log(`${newCorrectWords.length} === ${totalWords} (${newCorrectWords.length === totalWords})`)
            if (newCorrectWords.length === totalWords) {
                alert("Ganaste!");
            }
        }
    }

    return (
        <div style={layoutStyle}>
            <WordGuessesBoard allowedWords={getRoundConfig(1).allowedWords} shownWords={assertedWords} showAllWords={false} />
            <InputsBoard roundChars={getRoundConfig(1).allowedChars} onWordSubmit={handleWordSubmitted} />
        </div>
    );
}


export default Game;