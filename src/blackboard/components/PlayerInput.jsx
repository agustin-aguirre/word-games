import { useState } from "react";


function PlayerInput({onChange, onSubmit}) {

    const [formData, setFormData] = useState({ word: "" });

    function updateFormData(value) {
        const updatedFormData = {
            ...formData,
            word: value.toUpperCase()
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