import "./blackboard-game.css";
import PlayerInput from "./components/PlayerInput"
import PlayedLetters from "./components/PlayedLetters";
import PlayedWords from "./components/PlayedWords"

import { rounds } from "./data/data";
import { useState } from "react";


function BlackboardGame() {

    const [roundCount, setRoundCount] = useState(1)
    const [round, setRound] = useState(rounds[roundCount]);
    const [plays, setPlays] = useState({ 
        3: [],
        4: [],
        5: [],
        6: [],
    });

    const [playedLetters, setPlayedLetters] = useState([])

    function moveToNextRound(event, direction) {
        const newRoundCount = roundCount + direction;
        const newRound = rounds[newRoundCount];
        const playsResetted = { 
            3: [],
            4: [],
            5: [],
            6: [],
        };
        setRoundCount(newRoundCount);
        setRound(newRound);
        setPlays(playsResetted);
    }


    function onPlayerInput({word}) {
        setPlayedLetters(word.split(""));
    }

    function onPlayerSubmitWord({word}) {
        const length = word.length;
        const isValidWord = round.words.values[length].includes(word);
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
                all={round.words.values}
                />
            </div>
            <div style={{marginTop: "10px"}}>
                <button onClick={(e) => moveToNextRound(e, -1)}>Prev Round</button>
                <button onClick={(e) => moveToNextRound(e, 1)}>Next Round</button>
            </div>
        </div>
    );
}


export default BlackboardGame;