"use strict";
exports.__esModule = true;
exports.getHumanFriendlyText = exports.getHumanReadableNumberValue = exports.capitalizeFirstLetter = void 0;
var config_1 = require("../config");
var capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
exports.capitalizeFirstLetter = capitalizeFirstLetter;
var getHumanReadableNumberValue = function (value, variant) {
    if (variant === 'hours') {
        return config_1.hoursDescription[value];
    }
    return config_1.minutesDescription[value];
};
exports.getHumanReadableNumberValue = getHumanReadableNumberValue;
// Get time in format h:m (ex. 11:30, 12:56)
var getHumanFriendlyText = function (time) {
    if (time) {
        return time;
    }
};
exports.getHumanFriendlyText = getHumanFriendlyText;
