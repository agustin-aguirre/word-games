import { create } from 'zustand';


const defaultValues = {
	round: 0,
	allowedChars: [],
	allowedWords: {},
	totalWords: 0,
	totalTime: 0,
}


const useRoundConfigStore = create((set) => ({
	...defaultValues,
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	setChars: (chars) => set({ allowedChars: chars }),
	setWords: (allWords) => set({ 
		allowedWords: allWords, 
		totalWords: allWords.keys.map(length => allWords[length]).flatMap(arr => [...arr]).length,
	}),
	setTime: (newRoundTime) => set({ totalTime: newRoundTime }),
	load: (number, config) => set({ ...defaultValues, ...config, round: number })
}));


export default useRoundConfigStore;