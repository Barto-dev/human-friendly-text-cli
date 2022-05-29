import { program } from 'commander';
import { time, currentTime } from './commands/time';

program.addCommand(time);
program.addCommand(currentTime);

program.parse(process.argv);
