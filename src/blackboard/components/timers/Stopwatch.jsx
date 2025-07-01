import { useEffect, useRef } from 'react';
import usePlayerRoundStore from '../../stores/playerRound';
import useRoundConfigStore from '../../stores/roundConfig';


function Stopwatch() {
    
    const totalTime = useRoundConfigStore(state =>  state.totalTime);
    const roundState = usePlayerRoundStore(state => state.roundState);
    const timeElapsed = usePlayerRoundStore(state => state.timeElapsed);
    const increment = usePlayerRoundStore(state => state.incrementTimer);
    const start = usePlayerRoundStore(state => state.startRound);
    const finish = usePlayerRoundStore(state => state.finishRound);

    const intervalRef = useRef(null);
    useEffect(() => {
        if (roundState === "playing") {
            intervalRef.current = setInterval(() => increment(), 1000);
        }
        return () => clearInterval(intervalRef.current);
    }, [roundState]);


    return (
        <div>
            <p>Tiempo restante: {totalTime - timeElapsed}</p>
            {
                roundState === "idle"
                    ? <button onClick={start}>Iniciar</button>
                    : (roundState === "playing")
                        ? <button onClick={finish}>Detener</button>
                        : <p>Terminado</p>
            }
        </div>
    );
}


export default Stopwatch;