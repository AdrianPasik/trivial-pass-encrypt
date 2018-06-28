const encryptModule = require('../src/swapCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 0 },"aAa")).toBe("aAa");
    expect(encryptModule.encrypt({ numberOffset: 1, textOffset: 1 },"aAa")).toBe("bBb");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 23 },"a")).toBe("z");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 24 },"a")).toBe("a");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 25 },"a")).toBe("b");

    expect(encryptModule.encrypt({ numberOffset: 1, textOffset: 0 },"1")).toBe("2");
    expect(encryptModule.encrypt({ numberOffset: 8, textOffset: 0 },"1")).toBe("9");
    expect(encryptModule.encrypt({ numberOffset: 9, textOffset: 0 },"1")).toBe("0");
    expect(encryptModule.encrypt({ numberOffset: 10, textOffset: 0 },"1")).toBe("1");
});