import express from 'express';
import { format } from 'date-fns';
import { checkTimeArg, getHumanFriendlyTime } from './helpers';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Lloyd!');
});

app.get('/time', (req, res) => {
  if (!req.query.date) {
    const currentDate = format(new Date(), 'h:mm');
    res.json({ currentDate: getHumanFriendlyTime(currentDate) });
  }

  if (checkTimeArg(req.query.date)) {
    res.json({ date: getHumanFriendlyTime(req.query.date) });
  }

  if (!checkTimeArg(req.query.date)) {
    res.json({ invalidDate: 'Set a valid time in query param, for example date=11:30, date=1:42, date=12:15'});
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
