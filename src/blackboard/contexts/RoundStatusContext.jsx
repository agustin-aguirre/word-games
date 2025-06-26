import { createContext, useContext, useState, useMemo } from 'react';

// contenedor del estado
export const RoundStatusContext = createContext(null);

// hook personalizado
export const useRoundStatus = () => {
    return useContext(RoundStatusContext);
}

// provider
export const RoundStatusProvider = ({ children }) => {

    const [plays, setPlays] = useState({
            3: [],
            4: [],
            5: [],
            6: [],
        });

    const values = {
        plays,
        setPlays,
    };

    return (
        <RoundStatusContext.Provider value={values}>
            {children}
        </RoundStatusContext.Provider>
    );
};