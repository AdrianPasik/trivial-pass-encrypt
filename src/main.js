const outputPrint = require('./outputPrint.js');
const encryptor = require('./swapCharEncrypt.js');

console.log('Hello nodejs world');

const test = new outputPrint();
console.log( test.printTextBelowNumbers('something really long'));
