const readline = require('readline');
const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, '/text.txt');
const readSteam = fs.createWriteStream(pathFile);

const {
  stdin: input,
  stdout: output
} = require('process');


output.write('Привет, студент!\n');

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  if (input === 'exit') {
    output.write('Удачи в изучении Node.js!');
    rl.close();
  } else {
    readSteam.write(input + '\n');
  }
});

rl.on('SIGINT', () => {
  output.write('Удачи в изучении Node.js!');
  rl.close();
});