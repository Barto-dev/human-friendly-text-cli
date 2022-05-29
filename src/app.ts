import express from 'express';
import { format } from 'date-fns';
import { checkTimeArg, getHumanFriendlyTime } from './helpers';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Lloyd!');
});

app.get('/time', (req, res) => {
  let response = {};
  if (!req.query.date) {
    const currentDate = format(new Date(), 'h:mm');
    response = { currentDate: getHumanFriendlyTime(currentDate) };
  } else if (checkTimeArg(req.query.date)) {
    response = { date: getHumanFriendlyTime(req.query.date) };
  } else if (!checkTimeArg(req.query.date)) {
    response = { invalidDate: 'Set a valid time in query param, for example date=11:30, date=1:42, date=12:15' };
  }
  res.json(response);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
