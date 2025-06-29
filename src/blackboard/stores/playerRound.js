import { create } from "zustand";


const defaultPlayerRoundState = {
	round: 1,
	words: {},
	total: 0,
	time: 90,
	roundState: "idle",
}


const usePlayerRoundStore = create((set, get) => ({
	...defaultPlayerRoundState,
	
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	
	addWord: (newWord) => { 
		if (get().roundState !== "playing") return;
		const length = newWord.length
    	const currentWords = get().words[length] || []
		const updatedWords = currentWords.includes(newWord)
			? currentWords
			: [...currentWords, newWord]
		set({
			words: {
				...get().words,
				[length]: updatedWords
			},
			total: updatedWords.length,
		})
	},
	
	setTime: (newRoundTime) => set({ time: newRoundTime }),
	incrementTimer: () => set({ time: get().time + 1 }),
	decrementTimer: () => set({ time: Math.max(0, get().time - 1) }),

	startRound: () =>  {
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