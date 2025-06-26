import { useState } from "react";

function PlayerInput({onChange, onSubmit}) {

    const [formData, setFormData] = useState({ word: "" });


    function handleOnChange(value) {
        setFormData(prev => {
            return {
                ...prev,
                word: value.toUpperCase()
            }
        });
        onChange(formData);
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        onSubmit(formData);
        setFormData({word: ""})
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={formData.word} onChange={e => handleOnChange(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    );
}


export default PlayerInput;