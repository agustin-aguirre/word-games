import { useState } from "react";
import { motion } from "motion/react";
import useRoundConfigStore from "../../stores/roundConfig";
import usePlayerRound from "../../stores/playerRound";


function PlayerInput({onChange, onSubmit}) {

    const allowedChars = useRoundConfigStore(state => state.allowedChars);
    const roundState = usePlayerRound(state => state.roundState );
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
        <div>
            {}
            <form onSubmit={handleOnSubmit}>
            {
                roundState === "playing" &&
                <motion.div >
                    <input className={`
                    w-full 
                    py-4 text-center
                    tracking-widest
                    shadow-xl/20
                    shadow-2xl
                    rounded-2xl
                    text-2xl
                    `}
                    inputProps={{readOnly:true}}
                    type="text" 
                    value={formData.word} 
                    onChange={handleOnChange} 
                    />
                    <input className="word-input-submit" type="submit" hidden />
                </motion.div>
            }
            </form>
        </div>
    );
}


export default PlayerInput;