import { create } from 'zustand';
import { getRoundConfig } from '../services/rounds';
import shuffle from '../../utils/shuffling';


const defaultRoundConfig = getRoundConfig(1);

const defaultValues = {
	round: 1,
	allowedChars: defaultRoundConfig.allowedChars,
	allowedWords: defaultRoundConfig.allowedWords,
	charsOrder: defaultRoundConfig.allowedChars.map((_, i) => i),
	totalWords: defaultRoundConfig.totalWords,
	totalTime: 90,
}

const useRoundConfigStore = create((set, get) => ({
	...defaultValues,
	setRound: (newRoundNumber) => set({ round: newRoundNumber }),
	setChars: (chars) => set({ allowedChars: chars }),
	setWords: (allWords) => set({ 
		allowedWords: allWords, 
		totalWords: allWords.keys.map(length => allWords[length]).flatMap(arr => [...arr]).length,
	}),
	shuffleChars: () => set({ charsOrder: shuffle(get().charsOrder) }),
	setTime: (newRoundTime) => set({ totalTime: newRoundTime }),
	load: (number, config) => set({ ...defaultValues, ...config, round: number })
}));


export default useRoundConfigStore;