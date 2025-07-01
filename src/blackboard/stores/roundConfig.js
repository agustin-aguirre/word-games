import { create } from 'zustand';
import { getRoundConfig } from '../services/rounds';


const defaultRoundConfig = getRoundConfig(1);

const defaultValues = {
	round: 1,
	allowedChars: defaultRoundConfig.allowedChars,
	allowedWords: defaultRoundConfig.allowedWords,
	totalWords: defaultRoundConfig.totalWords,
	totalTime: 90,
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