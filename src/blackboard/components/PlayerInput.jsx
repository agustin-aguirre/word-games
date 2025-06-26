import { useState } from "react";


function PlayerInput({allowed, onChange, onSubmit}) {

    const [formData, setFormData] = useState({ word: "" });


    function updateFormData(value) {
        const preparedValue = value.toUpperCase();    
        const enteredChars = preparedValue.split("");
        const currentChar = preparedValue.length > 0? enteredChars.at(-1) : "";

        // detect not allowed chars
        if (currentChar != "" && !allowed.includes(currentChar)) {
            console.log(`Attempted to enter a non-allowed char: ${currentChar}`);
            return;
        }

        // detect exhausted char
        const countAllowed = allowed.reduce((acc, curr) => acc + (curr === currentChar? 1 : 0), 0);
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
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={formData.word} onChange={handleOnChange} />
                <input type="submit" />
            </form>
        </div>
    );
}


export default PlayerInput;