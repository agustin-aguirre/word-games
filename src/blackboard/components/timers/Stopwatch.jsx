import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    const [seconds, setSeconds] = useState(90);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => Math.max(0, prev - 1));
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    return (
        <div>
            <h1>Timer: {seconds} segundos</h1>
            <button onClick={() => setIsRunning(true)}>Iniciar</button>
            <button onClick={() => setIsRunning(false)}>Detener</button>
            <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reiniciar</button>
        </div>
    );
}


export default Stopwatch;