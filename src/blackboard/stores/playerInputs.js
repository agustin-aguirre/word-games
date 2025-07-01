import { create } from 'zustand';


const usePlayerInputStore = create((set, get) => ({
    enteredWord: "",
    enteredChars: [],
    lastChar: "",
    setEnteredWord: (word) => {
        const wordSplit = word.split("");
        set({ 
            enteredWord: word,
            enteredChars: wordSplit,
            lastChar: word.length > 0 
                ? wordSplit.at(-1) 
                : "",
         })
    },
}));


export default usePlayerInputStore;