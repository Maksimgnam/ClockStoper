
import './Footer.css'
import React, { useState, useEffect } from 'react';


function Clock() {
    const [time, setTime] = useState(new Date());
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => setTime(new Date()), 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartStopClick = () => {
        setIsRunning(!isRunning);
    };

    return (
        <div className='Footer'>
            <h1>{time.toLocaleTimeString()}</h1>
            <button onClick={handleStartStopClick}>{isRunning ? 'Stop' : 'Start'}</button>
        </div>
    );
}

export default Clock;
