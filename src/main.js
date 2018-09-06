const output = require('./outputPrint.js');
const encryptModule = require('./swapCharEncrypt.js');

console.log( output.printTextWithIndexes('something really long'));
//const anotherTest = new encrypt();
console.log( encryptModule.encrypt({
    numberOffset: 9,
    textOffset: 1
},"1"));