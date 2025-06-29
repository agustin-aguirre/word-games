import { create } from 'zustand';


const usePlayerInput = create((set) => ({
    entered: [],
    enterChar: (newChar) => set({ entered: [...entered, newChar] }),
    resetEntered: () => set({ entered : [] }),
}));


export default usePlayerInput;