import { useState } from "react";
import { motion } from "motion/react";
import useRoundConfigStore from "../../stores/roundConfig";
import usePlayerInputStore from "../../stores/playerInputs";
import usePlayerRoundStore from "../../stores/playerRound";
import CharButton from "../buttons/CharButton";


function PlayerInputPanel({onPlayerSubmitWord}) {

    const roundChars = useRoundConfigStore(state => state.allowedChars);
    const [enteredWord, setEnteredWord] = useState("")
    const [remainingChars, setRemainingChars] = useState([...roundChars]);
    const [pressedLetterButtons, setPressedLetterButtons] = useState([]);
    
    function forceUpdateFormValues(updatedEnteredWord, updatedRemainingChars) {
        setEnteredWord(updatedEnteredWord);
        setRemainingChars(updatedRemainingChars);
    }

    function resetFormValues() {
        forceUpdateFormValues("", [...roundChars]);
        setPressedLetterButtons([]);
    }

    function charCanBeAdded(char) {
        return remainingChars.includes(char);
    }

    // asume que llega en mayúscula
    function updateInput(char) {
        char = char.toUpperCase();
        if (!charCanBeAdded(char)) return false;

        const updatedRemainingChars = remainingChars.slice();
        const i = updatedRemainingChars.findIndex(value => value === char);
        if (i === -1) return false;
        updatedRemainingChars.splice(i, 1);
        
        forceUpdateFormValues(enteredWord + char, updatedRemainingChars);
        return true;
    }

    function onLetterClicked(id, letter) {
        updateInput(letter);
        setPressedLetterButtons(prev => prev.concat(id));
    }

    function handleOnKeyboardInductedChange(newValue) {
        const length = newValue.length;
        if (length === 0) {
            resetFormValues();
            return;
        }
        if (length < enteredWord.length) {
            forceUpdateFormValues(
                enteredWord.slice(0, -1), 
                remainingChars.concat(enteredWord.charAt(length-1))
            );
            setPressedLetterButtons(prev => prev.slice(0, -1));
            return;
        }
        updateInput(newValue.slice("").at(-1));
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        onSubmit(enteredWord);
        resetFormValues();
    }


    return (
        <div className={`
            rounded-2xl shadow-2xl cabin-sketch-bold 
            bg-emerald-800 text-white
            `}>
            <div>
                <form onSubmit={handleOnSubmit}>
                {
                    //roundState === "playing" &&
                    <motion.div>
                        <input className={`
                        w-full py-4 text-center tracking-widest
                        shadow-xl/20 shadow-2xl text-2xl rounded-2xl
                        `}
                        type="text" 
                        value={enteredWord} 
                        onChange={e => handleOnKeyboardInductedChange(e.target.value)} 
                        autoFocus
                        />
                        <input type="submit" hidden />
                    </motion.div>
                }
                </form>
            </div>
            <div className={`flex justify-between px-8 py-4`}>
                {roundChars.map((char, index) => {
                    const key = `${index}-${char}`;
                    return (
                        <CharButton key={key}
                        id={key}
                        char={char}
                        isHidden={pressedLetterButtons.includes(key)}
                        onClick={onLetterClicked}
                        />
                    );
                })}
            </div>
        </div>
    );
}
/*    
    const enteredWord = usePlayerInputStore(state => state.enteredWord);
    const enteredChars = usePlayerInputStore(state => state.enteredChars);
    const setEnteredWord = usePlayerInputStore(state => state.setEnteredWord);
    const allowedChars = useRoundConfigStore(state => state.allowedChars);
    const roundState = usePlayerRoundStore(state => state.roundState);
    const [formData, setFormData] = useState({ word: "" });

    function addChar(char) {
        if (roundState === "playing") {
            setEnteredWord(enteredWord + char);
        }
    }

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
        <div className="rounded-2xl shadow-2xl cabin-sketch-bold bg-emerald-800 text-white">
            <div>
                <form onSubmit={handleOnSubmit}>
                {
                    roundState === "playing" &&
                    <motion.div>
                        <input className={`
                        w-full py-4 text-center tracking-widest
                        shadow-xl/20 shadow-2xl rounded-2xl
                        text-2xl
                        `}
                        type="text" 
                        value={formData.word} 
                        onChange={handleOnChange} 
                        autoFocus
                        />
                        <input type="submit" hidden />
                    </motion.div>
                }
                </form>
            </div>
            <div className={`flex justify-between px-8 py-4`}>
                {allowedChars.map((char, index) => {
                    return (
                        <CharButton 
                        key={index} 
                        char={char}
                        isHidden={enteredChars.includes(char)}
                        onClick={addChar}
                        />
                    );
                })}
            </div>
        </div>
    )
}*/


export default PlayerInputPanel;