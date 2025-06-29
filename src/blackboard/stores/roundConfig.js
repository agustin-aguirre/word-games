import { create } from 'zustand';


const useRoundConfigStore = create((set) => ({
	round: 1,
	allowedChars: [],
	words: {},
	total: 0,
	time: 90,
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	setAllowedChars: (chars) => set({ allowedChars: chars }),
	setWords: (allWords) => set({ 
		words: allWords, 
		total: allWords.keys.map(length => allWords[length]).flatMap(arr => [...arr]).length,
	}),
	setTime: (newRoundTime) => set({ time: newRoundTime }),
}));


export default useRoundConfigStore;