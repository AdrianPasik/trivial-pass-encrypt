const encryptModule = require('../src/offsetCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.decrypt({ numberOffset: 0, textOffset: 0 },"aAa")).toBe("aAa");
    expect(encryptModule.decrypt({ numberOffset: 1, textOffset: 1 },"bBb")).toBe("aAa");
});