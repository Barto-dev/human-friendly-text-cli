import { Command } from 'commander';
import { format } from 'date-fns';
import { getHumanFriendlyTime, capitalizeFirstLetter } from '../../helpers';

export const time = new Command().command('time')
  .description('Return the time from arg using the Human Friendly Text')
  .argument('<string>', 'time in the format hh:mm (e.g. 11:45, 23:31 etc...',)
  .action((strings) => {
    const humanFriendlyTime = getHumanFriendlyTime(strings);
    console.log(capitalizeFirstLetter(humanFriendlyTime));
  });

export const currentTime = new Command().command('current-time')
  .description('Return the current time using the Human Friendly Text')
  .action(() => {
    const currentDate = format(new Date(), 'h:mm');
    const humanFriendlyTime = getHumanFriendlyTime(currentDate);
    console.log(capitalizeFirstLetter(humanFriendlyTime));
  });
