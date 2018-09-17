const output = require('./outputPrint.js');
const encryptModule = require('./swapCharEncrypt.js');
const shuffleModule = require('./shuffleCharEncrypt.js');

console.log( output.printTextWithIndexes('something really long'));
console.log( encryptModule.encrypt({
    numberOffset: 9,
    textOffset: 1
},"1"));

console.log(shuffleModule.encrypt({
    ShuffleOffset: 2
}, "abc"));