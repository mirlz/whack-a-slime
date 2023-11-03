import { useState, useMemo, useEffect } from 'react';
import HelperFunc from '../Utility/Helper';
import { constants } from '../Utility/Constants';

const Timer = ({ onEnd, paused }) => {
    const { timer, interval } = constants;
    const [counter, setCounter] = useState(timer);
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
                setCounter((prev) => prev -= interval)
            }, interval)
            return () => {
                clearInterval(timer)
            }
        }
    }, [interval, paused]);

    return (
        <div className="timer">
            Timer: {`${minutes}:${seconds}`}
        </div>
    )
}

export default Timer;