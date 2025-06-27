import { createContext, useContext, useMemo } from 'react';
import { rounds } from "../data/data"

// contenedor del estado
export const RondConfigContext = createContext(null);

// hook personalizado
export const useRoundConfig = () => {
    return useContext(RondConfigContext);
}

// provider
export const RoundConfigProvider = ({ roundNumber, children }) => {

    const roundConfig = rounds[roundNumber];

    const values = useMemo(() => ({
        ...roundConfig,
    }), [roundConfig])

    return (
        <RondConfigContext.Provider value={values}>
            {children}
        </RondConfigContext.Provider>
    );
};