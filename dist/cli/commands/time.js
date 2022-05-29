"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentTime = exports.time = void 0;
const commander_1 = require("commander");
const date_fns_1 = require("date-fns");
const helpers_1 = require("../../helpers");
exports.time = new commander_1.Command().command('time')
    .description('Return the time from arg using the Human Friendly Text')
    .argument('<string>', 'time in the format hh:mm (e.g. 11:45, 23:31 etc...')
    .action((strings) => {
    const humanFriendlyTime = (0, helpers_1.getHumanFriendlyTime)(strings);
    console.log((0, helpers_1.capitalizeFirstLetter)(humanFriendlyTime));
});
exports.currentTime = new commander_1.Command().command('current-time')
    .description('Return the current time using the Human Friendly Text')
    .action(() => {
    const currentDate = (0, date_fns_1.format)(new Date(), 'h:mm');
    const humanFriendlyTime = (0, helpers_1.getHumanFriendlyTime)(currentDate);
    console.log((0, helpers_1.capitalizeFirstLetter)(humanFriendlyTime));
});
//# sourceMappingURL=time.js.map