import { shallow } from 'zustand/shallow';
import usePlayerRoundStore from '../../stores/playerRound';
import useRoundConfigStore from '../../stores/roundConfig';


function Stopwatch() {
    
    const totalTime = useRoundConfigStore(state =>  state.totalTime);
    const { isPlaying, timeElapsed, start, finish } = usePlayerRoundStore(state => ({
        isPlaying: state.isPlaying,
        timeElapsed: state.timeElapsed,
        start: state.startRound,
        finish: state.finishRound,
    }, shallow
    ));

    return (
        <div>
            <p>Tiempo restante: {timeElapsed - totalTime}</p>
            {
                isPlaying
                    ? <button onClick={start}>Detener</button>
                    : <button onClick={finish}>Iniciar</button>
            }
        </div>
    );
}


export default Stopwatch;