"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const date_fns_1 = require("date-fns");
const helpers_1 = require("./helpers");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello Lloyd!');
});
app.get('/time', (req, res) => {
    let response = {};
    if (!req.query.date) {
        const currentDate = (0, date_fns_1.format)(new Date(), 'h:mm');
        response = { currentDate: (0, helpers_1.getHumanFriendlyTime)(currentDate) };
    }
    else if ((0, helpers_1.checkTimeArg)(req.query.date)) {
        response = { date: (0, helpers_1.getHumanFriendlyTime)(req.query.date) };
    }
    else if (!(0, helpers_1.checkTimeArg)(req.query.date)) {
        response = { invalidDate: 'Set a valid time in query param, for example date=11:30, date=1:42, date=12:15' };
    }
    res.json(response);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
