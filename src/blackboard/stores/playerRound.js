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
		if (get().roundState !== "playing") return;
		const length = newWord.length;
    	const currentWords = get().enteredWords[length] || [];
		const updatedWords = currentWords.includes(newWord)
			? currentWords
			: [...currentWords, newWord];
		set({
			enteredWords: {
				...get().words,
				[length]: updatedWords
			},
			totalEnteredWords: updatedWords.length,
		});
	},
	
	setTime: (newRoundTime) => set({ timeElapsed: newRoundTime }),
	decrementTimer: () => set({ timeElapsed: Math.max(0, get().timeElapsed - 1) }),

	startRound: () =>  {
		const currState = get().roundState;
		set({ roundState: currState === "idle" ? "playing" : currState });
	},
	
	finishRound: () => {
		const currState = get().roundState;
		set({ roundState: currState === "playing" ? "finished" : currState });
	},

	get isIdle() {
		return get().roundState === "idle";
	},
	get isPlaying() {
		return get().roundState === "playing";
	},
	get isFinished() {
		return get().roundState === "finished";
	},

	resetRound: () => set({...get(), ...defaultPlayerRoundState}),
}));


export default usePlayerRoundStore;