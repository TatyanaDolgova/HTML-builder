const readline = require('readline');
const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, '/text.txt');
const writeSteam = fs.createWriteStream(pathFile);

const {
  stdin: input,
  stdout: output
} = require('process');


output.write('Hello, student!\nEnter the text\n');

const rl = readline.createInterface({ input, output });

rl.on('line', (input) => {
  if (input === 'exit') {
    output.write('Good luck learning Node.js!');
    rl.close();
  } else {
    writeSteam.write(input + '\n');
  }
});

rl.on('SIGINT', () => {
  output.write('Good luck learning Node.js!');
  rl.close();
});