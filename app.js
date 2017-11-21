const readline = require('readline');
const Processor = require('./Processor.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const p = new Processor();

rl.question('Type a number: ', (number) => {
    console.log(p.translate(number));
});
rl.on('line', (number) => {
    console.log(p.translate(number));
});