"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var time_1 = require("./commands/time");
commander_1.program.addCommand(time_1.time);
commander_1.program.parse(process.argv);
