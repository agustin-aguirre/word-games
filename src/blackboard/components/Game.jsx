import { useState } from "react";
import PlayerInput from "./inputs/PlayerInput";
import PlayedLetters from "./letters/PlayedLetters";
import PlayedWords from "./words/PlayedWords";
import { useRoundConfig } from "../contexts/RoundConfigContext";


function Game() {
    
    const roundConfig = useRoundConfig();

    const [plays, setPlays] = useState({ 
        3: [],
        4: [],
        5: [],
        6: [],
    });
    
    const [playedLetters, setPlayedLetters] = useState([])


    function onPlayerInput({word}) {
        setPlayedLetters(word.split(""));
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = roundConfig.words[length].includes(word);
        if (isValidWord) {
            const wordAlreadyPlayed = plays[length].includes(word);
            if (!wordAlreadyPlayed) {
                setPlays(prev => {
                    return {
                        ...prev,
                        [length]: [...prev[length], word]
                    }
                });
            }
        }
    }

    return (
        <div className="game-loop-container">
            <PlayerInput
            onChange={onPlayerInput}
            onSubmit={onPlayerSubmitWord}
            />
            <PlayedLetters played={playedLetters}/>
            <PlayedWords played={plays} />
        </div>
    );
}


export default Game;