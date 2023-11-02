import { useState, useMemo, useEffect } from 'react';
import HelperFunc from '../Utility/Helper';


const Timer = ({ onEnd, paused }) => {
    const vite_timer = import.meta.env.VITE_TIMER;
    const vite_interval = import.meta.env.VITE_INTERVAL;
    const [counter, setCounter] = useState(vite_timer);
    const [minutes, seconds] = useMemo(() => HelperFunc.getReadableTimerFromMS(counter), [counter]);

    useEffect(() => {
        if (counter <= 0) {
            onEnd();
        }
    }, [counter, onEnd])
    useEffect(() => {
        let timer;
        if (!paused) {
            timer = setInterval(() => {
                setCounter((prev) => prev -= vite_interval)
            }, vite_interval)
            return () => {
                clearInterval(timer)
            }
        }
    }, [vite_interval, paused]);

    return (
        <div className="timer">
            Timer: {`${minutes}:${seconds}`}
        </div>
    )
}

export default Timer;