const output = require('./outputPrint');
const encryptModule = require('./offsetCharEncrypt');
const shuffleModule = require('./shuffleCharEncrypt');

console.log( output.printTextWithIndexes('something really long'));
console.log( encryptModule.encrypt({
    numberOffset: 9,
    textOffset: 1
},"1"));

console.log(shuffleModule.encrypt({
    ShuffleOffset: 3
}, "abcd"));