import { create } from 'zustand';


const useRoundConfigStore = create((set) => ({
	round: 1,
	allowedChars: [],
	allowedWords: {},
	totalAllowedWords: 0,
	totalRoundTime: 90,
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	setChars: (chars) => set({ allowedChars: chars }),
	setWords: (allWords) => set({ 
		allowedWords: allWords, 
		totalAllowedWords: allWords.keys.map(length => allWords[length]).flatMap(arr => [...arr]).length,
	}),
	setTime: (newRoundTime) => set({ totalRoundTime: newRoundTime }),
}));


export default useRoundConfigStore;