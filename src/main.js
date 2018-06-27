const outputPrintModule = require('./outputPrint.js');
const encryptModule = require('./swapCharEncrypt.js');

console.log('Hello nodejs world');

const test = new outputPrintModule();
console.log( test.printTextBelowNumbers('something really long'));
//const anotherTest = new encrypt();
console.log( encryptModule.encrypt({
    numberOffset: 1,
    textOffset: 1
},"aAa"));