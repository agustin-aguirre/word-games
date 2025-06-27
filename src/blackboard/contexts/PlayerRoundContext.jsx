import { createContext, useContext, useState } from 'react';

// contenedor del estado
export const PlayerRoundContext = createContext(null);

// hook personalizado
export const usePlayerRound = () => {
    return useContext(PlayerRoundContext);
}

// provider
export const PlayerRoundProvider = ({ children }) => {
    const [guessedWords, setGuessedWords] = useState({});
    const [total, setTotal] = useState(0);

    const addGuessedWord = (word) => {
        const length = word.length;
        const newGuesses = {
            ...guessedWords,
            [length]: (guessedWords[length] || [])
        }

        // if word isn't already added
        if (!newGuesses[length].includes(word)) {
            newGuesses[length].push(word);
            setGuessedWords(newGuesses);
            setTotal(prev => prev + 1);
        }
    }

    const reset = () => {
        setGuessedWords({});
        setTotal(0);
    }

    const values = {
        guessedWords,
        total,
        addGuessedWord,
        reset,
    };

    return (
        <PlayerRoundContext.Provider value={values}>
            {children}
        </PlayerRoundContext.Provider>
    );
};