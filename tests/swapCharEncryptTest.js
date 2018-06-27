const encryptModule = require('../src/swapCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    let output = encryptModule.encrypt({
        numberOffset: 1,
        textOffset: 1
    },"aAa");
    expect(output).toBe("bBb");
});