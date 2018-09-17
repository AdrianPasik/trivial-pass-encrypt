const encryptModule = require('../src/shuffleCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.decrypt({ ShuffleOffset: 0 },"aAa")).toBe("aAa");
    expect(encryptModule.decrypt({ ShuffleOffset: 0 },"abc")).toBe("abc");
    expect(encryptModule.decrypt({ ShuffleOffset: 1 },"bac")).toBe("abc");
    expect(encryptModule.decrypt({ ShuffleOffset: 2 },"cba")).toBe("abc");
    expect(encryptModule.decrypt({ ShuffleOffset: 3 },"abc")).toBe("abc");
    expect(encryptModule.decrypt({ ShuffleOffset: 4 },"abc")).toBe("abc");

    expect(encryptModule.decrypt({ ShuffleOffset: 0 },"aAaA")).toBe("aAaA");
    expect(encryptModule.decrypt({ ShuffleOffset: 0 },"abcd")).toBe("abcd");
    expect(encryptModule.decrypt({ ShuffleOffset: 1 },"badc")).toBe("abcd");
    expect(encryptModule.decrypt({ ShuffleOffset: 2 },"cdab")).toBe("abcd");
    expect(encryptModule.decrypt({ ShuffleOffset: 3 },"dbca")).toBe("abcd");
    expect(encryptModule.decrypt({ ShuffleOffset: 4 },"abcd")).toBe("abcd");
    expect(encryptModule.decrypt({ ShuffleOffset: 4 },"abcd")).toBe("abcd");
});