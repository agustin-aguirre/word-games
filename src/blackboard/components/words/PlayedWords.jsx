import { useRoundConfig } from "../../contexts/RoundConfigContext";
import "./played-words.css";


function PlayedWords({played}) {

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
                            played={played[length]}
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