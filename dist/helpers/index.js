"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHumanFriendlyTime = exports.checkTimeArg = exports.getHumanReadableNumberValue = exports.capitalizeFirstLetter = void 0;
const config_1 = require("../config");
const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
const getHumanReadableNumberValue = (value, variant) => {
    if (variant === 'hours') {
        return config_1.hoursDescription[value];
    }
    return config_1.minutesDescription[value];
};
exports.getHumanReadableNumberValue = getHumanReadableNumberValue;
const getNextHour = (hour) => {
    if (hour === '00') {
        return '1';
    }
    if (hour === '23') {
        return '00';
    }
    const nextHour = Number(hour) + 1;
    return nextHour.toString();
};
// string matching check 00:00 - 23:59
const checkTimeArg = (time) => {
    const regEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regEx.test(time);
};
exports.checkTimeArg = checkTimeArg;
// Get time in format h:m (ex. 11:30, 12:56)
const getHumanFriendlyTime = (time) => {
    if (!(0, exports.checkTimeArg)(time)) {
        return 'Enter a valid time, for example 11:30, 1:42, 12:15';
    }
    const timesInArr = time.split(':');
    const hours = timesInArr[0];
    const minutes = timesInArr[1];
    let humanReadableHours = (0, exports.getHumanReadableNumberValue)(hours, 'hours');
    let humanReadableMinutes = (0, exports.getHumanReadableNumberValue)(minutes, 'minutes');
    // convert minute from format '05' => 5
    const minuteStrToNumber = parseInt(minutes);
    // if number didn't multiple we show message 14.02 => two minutes past two
    const isNumberMultipleFive = minuteStrToNumber % 5 === 0;
    if (minutes === '00') {
        return `${humanReadableHours} o'clock`;
    }
    if (minutes === '30') {
        return `Half past ${humanReadableHours}`;
    }
    if (minuteStrToNumber >= 1 && minuteStrToNumber < 30) {
        const minuteDescription = isNumberMultipleFive ? ' ' : ' minutes ';
        return `${humanReadableMinutes}${minuteDescription}past ${humanReadableHours}`;
    }
    if (Number(minutes) > 30 && Number(minutes) <= 59) {
        const minuteDescription = isNumberMultipleFive ? ' ' : ' minutes ';
        const minutesToEndHour = 60 - minuteStrToNumber;
        // if we get 1 to end of our we transform this to '01' for get human-readable value
        const minuteToStr = minutesToEndHour < 10 ? `0${minutesToEndHour}` : `${minutesToEndHour}`;
        const nextHour = getNextHour(hours);
        humanReadableMinutes = (0, exports.getHumanReadableNumberValue)(minuteToStr, 'minutes');
        humanReadableHours = (0, exports.getHumanReadableNumberValue)(nextHour, 'hours');
        return `${humanReadableMinutes}${minuteDescription}to ${humanReadableHours}`;
    }
    if (time) {
        return time;
    }
};
exports.getHumanFriendlyTime = getHumanFriendlyTime;
