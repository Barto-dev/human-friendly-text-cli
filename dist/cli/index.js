"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const time_1 = require("./commands/time");
commander_1.program.addCommand(time_1.time);
commander_1.program.addCommand(time_1.currentTime);
commander_1.program.parse(process.argv);
