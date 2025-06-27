import { usePlayerRound } from '../../contexts/PlayerRoundContext';


function Stopwatch() {
    
    const playerRound = usePlayerRound();

    const handlePlay = (value) => {
        value? playerRound.start() : playerRound.finish();
    }

    return (
        <div>
            <p>Tiempo restante: {playerRound.timeLeft}</p>
            {
                playerRound.isPlaying ?
                <button onClick={() => handlePlay(false)}>Detener</button> :
                <button onClick={() => handlePlay(true)}>Iniciar</button>
            }
        </div>
    );
}


export default Stopwatch;