import { shallow } from 'zustand/shallow';
import usePlayerRoundStore from '../../stores/playerRound';
import useRoundConfigStore from '../../stores/roundConfig';


function Stopwatch() {
    
    const totalTime = useRoundConfigStore(state =>  state.totalTime);
    const { timeElapsed, start, finish } = usePlayerRoundStore(state => ({
            timeElapsed: state.timeElapsed,
            start: state.startRound,
            finish: state.finishRound,
        },
        shallow
    ));

    const handlePlay = (value) => {
        value? start() : finish();
    }

    return (
        <div>
            <p>Tiempo restante: {timeElapsed - totalTime}</p>
            {
                playerRound.isPlaying ?
                <button onClick={start()}>Detener</button> :
                <button onClick={finsh}>Iniciar</button>
            }
        </div>
    );
}


export default Stopwatch;