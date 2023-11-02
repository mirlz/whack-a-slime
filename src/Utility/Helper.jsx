const formatTimeDoubleDigits = (time = 0) => {
    return time.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
}
const getMinutes = (countDown = 0) => {
    return Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
}
const getSeconds = (countDown = 0) => {
    return Math.floor((countDown % (1000 * 60)) / 1000);
}
const getReadableTimerFromMS = (countDown) => {
    let minutes = 0, seconds = getSeconds(countDown);

    if (countDown >= (1000 * 60)) {
        minutes = getMinutes(countDown);
    }

    return [formatTimeDoubleDigits(minutes), formatTimeDoubleDigits(seconds)];
}

const HelperFunc = {
    getReadableTimerFromMS
}

export default HelperFunc;