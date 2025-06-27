import "./blackboard-game.css";
import PlayerInput from "./components/PlayerInput"
import PlayedLetters from "./components/PlayedLetters";
import PlayedWords from "./components/PlayedWords"
import Stopwatch from "./components/Stopwatch";

import {rounds} from "./data/data";
import { useState } from "react";


function BlackboardGame() {

    const round = rounds["1"];
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
        const isValidWord = round.words[length].includes(word);
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
        <div>
            <h1>
                "The Blackboard Game"
            </h1>
            <div className="game-loop-container">
                <PlayerInput
                allowed={round.letters}
                onChange={onPlayerInput}
                onSubmit={onPlayerSubmitWord}
                />
                <PlayedLetters played={playedLetters} all={round.letters}/>
                <PlayedWords 
                played={plays} 
                all={round.words}
                />
            </div>
        </div>
    );
}


export default BlackboardGame;