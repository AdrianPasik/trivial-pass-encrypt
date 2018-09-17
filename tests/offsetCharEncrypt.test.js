const encryptModule = require('../src/offsetCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 0 },"aAa")).toBe("aAa");
    expect(encryptModule.encrypt({ numberOffset: 1, textOffset: 1 },"aAa")).toBe("bBb");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 23 },"a")).toBe("z");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 24 },"a")).toBe("a");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 25 },"a")).toBe("b");
    expect(encryptModule.encrypt({ numberOffset: 0, textOffset: 25 },"A")).toBe("B");

    expect(encryptModule.encrypt({ numberOffset: 1, textOffset: 0 },"1")).toBe("2");
    expect(encryptModule.encrypt({ numberOffset: 8, textOffset: 0 },"1")).toBe("9");
    expect(encryptModule.encrypt({ numberOffset: 9, textOffset: 0 },"1")).toBe("0");
    expect(encryptModule.encrypt({ numberOffset: 10, textOffset: 0 },"1")).toBe("1");
});

test('Should work correctly on combined numbers and letters', () => {
    expect(encryptModule.encrypt({ numberOffset: 1, textOffset: 1 },"a1B")).toBe("b2C");
    expect(encryptModule.encrypt({ numberOffset: -2, textOffset: -2 },"a1B")).toBe("y9Z");
});