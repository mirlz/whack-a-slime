const getReadableTimerFromMS = (countDown) => {
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [minutes, seconds];
}

const HelperFunc = {
    getReadableTimerFromMS
}

export default HelperFunc;