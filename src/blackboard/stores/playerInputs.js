import { create } from 'zustand';


const usePlayerInputStore = create((set, get) => ({
    inputs: [],
    word: "",
    chars: [],
    
    flushInputs: () => set(() => ({
        inputs: [],
        word: "",
        chars: [],
    })),

    pushInput: (id, value) => set(() => {
        const newInputs = get().inputs.concat({ id: id, value: value });
        const newChars = newInputs.map(input => input.value);
        return { 
            inputs: newInputs,
            chars: newChars,
            word: newChars.join(""),
        }
    }),

    popInput: () => set(() => {
        const newInputs = get().inputs;
        if (newInputs.length === 0) return;
        newInputs.pop();
        const newChars = newInputs.map(input => input.value);
        return {
            inputs: newInputs,
            chars: newChars,
            word: newChars.join("")
        }
    }),
}));


export default usePlayerInputStore;