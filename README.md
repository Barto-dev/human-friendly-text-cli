###Required

To run CLI you need to follow the following steps
1. Clone this repository on your computer
2. Install [node.js](https://nodejs.org/en/) v14 or higher
___
###Objective 1
Write a command-line program that returns the current time using the "Human Friendly Text" demonstrated in the example below.

1. In terminal run this command `node dist/cli current-time`
___
###Objective 2
Allow the command to take an arbitrary Numeric Time parameter as input and return the "Human Friendly Text" equivalent.

1. In terminal run this command `node dist/cli time 11:34` or other time in this format
___
###Objective 3
Write a REST service to expose the clock and allow an optional parameter to pass the arbitrary Numeric Time like Objective 2, returning the "Human Friendly Text" as JSON.

1. In terminal run this command `npm run serve`
2. Follow the link [http://localhost:3000/time](http://localhost:3000/time)
3. Add query param in this format http://localhost:3000/time?date=11:30
