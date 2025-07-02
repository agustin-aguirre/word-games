import { useEffect, useRef } from 'react';
import usePlayerRoundStore from '../../stores/playerRound';
import useRoundConfigStore from '../../stores/roundConfig';
import "./stopwatch.css";


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
    }, [roundState, timeElapsed]);


    return (
        <div className="stopwatch">
            <h3>{totalTime - timeElapsed}</h3>
        </div>
    );
}


export default Stopwatch;