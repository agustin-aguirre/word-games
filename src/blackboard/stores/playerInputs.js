import { create } from 'zustand';


const usePlayerInput = create((set, get) => ({
    enteredWord: "",
    setEnteredWord: (word) => set({ enteredWord: word }),
    get lastChar() {
        return get().enteredWord.slice(-1);
    },
    get enteredChars() {
        return get().enteredWord.split("");
    }
}));


export default usePlayerInput;