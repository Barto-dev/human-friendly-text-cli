"use strict";
exports.__esModule = true;
exports.time = void 0;
var commander_1 = require("commander");
var helpers_1 = require("../../helpers");
exports.time = new commander_1.Command().command('time')
    .description('Return the current time using the Human Friendly Text')
    .argument('<string>', 'qw')
    .action(function (strings, options) {
    console.log(strings);
    console.log((0, helpers_1.getHumanFriendlyText)(strings));
});
