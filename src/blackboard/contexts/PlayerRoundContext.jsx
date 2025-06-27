import { createContext, useContext, useEffect, useRef, useState } from 'react';

// contenedor del estado
export const PlayerRoundContext = createContext(null);

// hook personalizado
export const usePlayerRound = () => {
    return useContext(PlayerRoundContext);
}

// provider
export const PlayerRoundProvider = ({ totalRoundTime, children }) => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(totalRoundTime ?? 90);
    const [guessedWords, setGuessedWords] = useState({});
    const [total, setTotal] = useState(0);
    
    const intervalRef = useRef(null);
    
    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => Math.max(0, prev - 1));
            }, 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [isPlaying]);


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


    const start = () => {
        setIsPlaying(true);
    }

    const finish = () => {
        setIsPlaying(false);
    }

    
    const values = {
        isPlaying,
        start,
        finish,
        timeLeft,
        guessedWords,
        total,
        addGuessedWord
    };

    return (
        <PlayerRoundContext.Provider value={values}>
            {children}
        </PlayerRoundContext.Provider>
    );
};