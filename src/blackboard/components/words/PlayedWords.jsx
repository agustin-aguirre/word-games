import { useRoundConfig } from "../../contexts/RoundConfigContext";
import { usePlayerRound } from "../../contexts/PlayerRoundContext";
import "./played-words.css";


function PlayedWords() {

    const { guessedWords } = usePlayerRound();
    const allowedWords = useRoundConfig().words;

    const PlayedWordDisplay = ({word, isPlayed}) => {
        return <li>{isPlayed? word : "_".repeat(word.length)}</li>
    }

    const PlayedWordsGroup = ({played, all}) => {
        return (
            <ul>
                {all.map(word => 
                    <PlayedWordDisplay 
                    word={word} 
                    isPlayed={played.includes(word)} 
                />)}
            </ul>
        );
    }

    return (
        <div className="all-played-words-container">
            {
                Object.keys(allowedWords).map(length => {
                    return (
                        <div className="played-words-group">
                            <PlayedWordsGroup
                            played={guessedWords[length] || []}
                            all={allowedWords[length]}
                            />
                        </div>
                    );
                })
            }
        </div>
    );
}


export default PlayedWords;