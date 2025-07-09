import { motion } from "motion/react";
import useRoundConfigStore from "../../stores/roundConfig";
import usePlayerInputStore from "../../stores/playerInputs";
import InputPanelCharButton from "../buttons/InputPanelCharButton";


function PlayerInputPanel({onPlayerSubmitWord}) {

    const roundChars = useRoundConfigStore(state => state.allowedChars);
    const inputs = usePlayerInputStore(state => state.inputs);
    const inputChars = usePlayerInputStore(state => state.chars);
    const inputWord = usePlayerInputStore(state => state.word);
    const flushInputs = usePlayerInputStore(state => state.flushInputs);
    const pushInput = usePlayerInputStore(state => state.pushInput);
    const popInput = usePlayerInputStore(state => state.popInput);
    
    const registeredInputs = roundChars.map((char, index) => {
        const id = `${index}-${char}`;
        return {
            id: id,
            value: char,
            button: <InputPanelCharButton key={id} id={id} value={char} onClick={onButtonClick} />,
        }
    });
    

    function onButtonClick(id, value) {
        if (inputs.find(input => input.id === id)) return;
        pushInput(id, value);
    }

    function handleKeyboardInductedChange(newWord) {
        // detects deletion
        if (newWord.length < inputWord.length && inputWord.length > 0) {
            popInput();
            return;
        }
        // detect addition
        const newChar = newWord.split("").at(-1);
        const accFunc = (acc, curr) => acc + (curr === newChar ? 1 : 0);
        const newCharAllowedCount = roundChars.reduce(accFunc, 0);
        const newCharCurrentCount = inputChars.reduce(accFunc, 0);
        if (newCharCurrentCount >= newCharAllowedCount) return;
        const targetInput = registeredInputs
            .filter(input => input.value === newChar)
            .slice(newCharCurrentCount)[0];
        pushInput(targetInput.id, targetInput.value);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        const word = inputWord;
        flushInputs();
        onPlayerSubmitWord(word);
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
                        shadow-xl/20 shadow-2xl text-3xl rounded-2xl
                        `}
                        type="text" 
                        value={inputWord} 
                        onChange={e => handleKeyboardInductedChange(e.target.value.toUpperCase())} 
                        autoFocus
                        />
                        <input type="submit" hidden />
                    </motion.div>
                }
                </form>
            </div>
            <div>
                {registeredInputs.map(input => input.button)}
            </div>
        </div>
    );
}


export default PlayerInputPanel;