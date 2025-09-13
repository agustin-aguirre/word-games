import ChalkboardPanel from "../panels/ChalkboardPanel";
import WordDisplay from "./WordDisplay";
import "./board-styles.css";


function WordGuessesBoard({ allowedWords, shownWords, showAllWords }) {

    return (
        <ChalkboardPanel className="word-guesses-layout">
        {
            Object.keys(allowedWords).map((length) => (
                <ol key={length}>
                    {
                        allowedWords[length].map((word, index) =>
                            <li key={index}>
                                <WordDisplay word={word} hidden={!shownWords.includes(word) && !showAllWords} />
                            </li>
                        )
                    }
                </ol>
            ))
        }
        </ChalkboardPanel>
    );
}


export default WordGuessesBoard;