import { motion } from "motion/react";
import useRoundConfigStore from "../../stores/roundConfig";
import usePlayerInputStore from "../../stores/playerInputs";
import InputPanelCharButton from "../buttons/InputPanelCharButton";
import InputActionButton from "../buttons/InputActionButton";


function PlayerInputPanel({onPlayerSubmitWord}) {

    const roundChars = useRoundConfigStore(state => state.allowedChars);
    const charsOrder = useRoundConfigStore(state => state.charsOrder);
    const inputs = usePlayerInputStore(state => state.inputs);
    const inputChars = usePlayerInputStore(state => state.chars);
    const inputWord = usePlayerInputStore(state => state.word);
    const flushInputs = usePlayerInputStore(state => state.flushInputs);
    const pushInput = usePlayerInputStore(state => state.pushInput);
    const popInput = usePlayerInputStore(state => state.popInput);
    
    const possibleInputs = roundChars.map((char, index) => {
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
        const targetInput = possibleInputs
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
        <motion.div>
            <div className={`
                rounded-2xl shadow-2xl cabin-sketch-bold 
                bg-emerald-800 text-white
                grid grid-rows-2
                `}>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className={`w-full text-center tracking-widest
                                shadow-xl/20 shadow-2xl text-3xl rounded-2xl 
                                grid grid-cols-6`}>
                            
                            <InputActionButton name="Borrar" symbolName="backspace"/>
                            
                            <div className="py-4 col-span-4">
                                <input type="text" value={inputWord} autoFocus
                                className="w-full text-center text-4xl" 
                                onChange={e => handleKeyboardInductedChange(e.target.value.toUpperCase())} 
                                />
                            </div>

                            <InputActionButton name="Ingresar" symbolName="arrow_forward"/>
                        </div>
                        <input type="submit" hidden />
                    </form>
                </div>
                <div className={`grid grid-cols-${roundChars.length}`}>
                    { charsOrder.map(index => possibleInputs[index].button) }
                </div>
            </div>
        </motion.div>
    );
}


export default PlayerInputPanel;