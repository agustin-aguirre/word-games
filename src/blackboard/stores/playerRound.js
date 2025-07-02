import { create } from "zustand";


const defaultPlayerRoundState = {
	round: 1,
	enteredWords: {},
	totalEnteredWords: 0,
	timeElapsed: 0,
	roundState: "idle",
}


const usePlayerRoundStore = create((set, get) => ({
	...defaultPlayerRoundState,
	
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	
	addWord: (newWord) => {
		const length = newWord.length;
    	const currentWords = get().enteredWords[length] || [];
		const updatedWords = currentWords.includes(newWord)
			? currentWords
			: [...currentWords, newWord];
		set({
			enteredWords: {
				...get().enteredWords,
				[length]: updatedWords
			},
			totalEnteredWords: get().totalEnteredWords + (currentWords < updatedWords ? 1 : 0),
		});
	},
	
	setTime: (newRoundTime) => set({ timeElapsed: newRoundTime }),
	incrementTimer: (amount) => set({ timeElapsed: get().timeElapsed + (amount ?? 1) }),
	decrementTimer: (amount) => set({ timeElapsed: Math.max(0, get().timeElapsed - (amount ?? 1)) }),

	startRound: () => {
		const currState = get().roundState;
		set({ roundState: currState === "idle" ? "playing" : currState });
	},
	
	finishRound: () => {
		const currState = get().roundState;
		set({ roundState: currState === "playing" ? "finished" : currState });
	},

	resetRound: () => set({...get(), ...defaultPlayerRoundState}),
}));


export default usePlayerRoundStore;