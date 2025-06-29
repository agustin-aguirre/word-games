import { useState } from "react";
import useRoundConfigStore from "../../stores/roundConfig";
import usePlayerRound from "../../stores/playerRound";
import "./player-input.css";


function PlayerInput({onChange, onSubmit}) {

    const allowedChars = useRoundConfigStore(state => state.allowedChars);
    const isPlaying = usePlayerRound(state => state.isPlaying );
    const [formData, setFormData] = useState({ word: "" });


    function updateFormData(value) {
        const preparedValue = value.toUpperCase();    
        const enteredChars = preparedValue.split("");
        const currentChar = preparedValue.length > 0? enteredChars.at(-1) : "";

        // detect not allowed chars
        if (currentChar != "" && !allowedChars.includes(currentChar)) {
            console.log(`Attempted to enter a non-allowed char: ${currentChar}`);
            return;
        }

        // detect exhausted char
        const countAllowed = allowedChars.reduce((acc, curr) => acc + (curr === currentChar? 1 : 0), 0);
        const countEntered = enteredChars.reduce((acc, curr) => acc + (curr === currentChar? 1 : 0), 0);
        if (countAllowed < countEntered) {
            console.log(`Attempted to enter an non-available char: ${currentChar}`);
            return;
        }

        const updatedFormData = {
            ...formData,
            word: preparedValue
        };
        setFormData(updatedFormData);
        onChange(updatedFormData);
    }


    function handleOnChange(event) {
        updateFormData(event.target.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        const currentFormData = {...formData}
        onSubmit(currentFormData);
        updateFormData("");
    }

    return (
        <div className="player-input-container">
            <form onSubmit={handleOnSubmit}>
            {
                isPlaying &&
                <>
                    <input className="word-input-field" type="text" value={formData.word} onChange={handleOnChange} />
                    <input className="word-input-submit" type="submit" />
                </>
            }
            </form>
        </div>
    );
}


export default PlayerInput;