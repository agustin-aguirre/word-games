import { useState } from "react";
import ChalkboardPanel from "../panels/ChalkboardPanel"
import ChalkboardButton from "../buttons/ChalkboardButton";


function InputsBoard({ roundChars, onWordSubmit }) {

    const [enteredWord, setEnteredWord] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const word = enteredWord;
        setEnteredWord("");
        onWordSubmit(word);
    }

    const handleChange = (newValue) => {
        const val = newValue.toUpperCase();
        setEnteredWord(val);
    }

    const handleCharClick = (char) => {
        setEnteredWord(prev => prev + char.toUpperCase());
    }


    return (
        <ChalkboardPanel className="char-inputs-layout">
            <form onSubmit={handleSubmit}>
                <input type="text" value={enteredWord} onChange={(event) => handleChange(event.target.value)} />
                <input type="submit" value="" hidden/>
            </form>
            <div className="char-buttons-layout">
                { roundChars.map((char, index) => 
                    <ChalkboardButton key={index} char={char} onClick={handleCharClick} />
                )}
            </div>
        </ChalkboardPanel>
    );
}


export default InputsBoard;