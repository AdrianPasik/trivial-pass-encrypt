const encryptModule = require('../src/shuffleCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.encrypt({ ShuffleOffset: 0 },"aAa")).toBe("aAa");
    
});