const encryptModule = require('../src/shuffleCharEncrypt.js');
test ('Should work correctly on primitive data', () => {
    expect(encryptModule.encrypt({ ShuffleOffset: 0 },"aAa")).toBe("aAa");
    expect(encryptModule.encrypt({ ShuffleOffset: 0 },"abc")).toBe("abc");
    expect(encryptModule.encrypt({ ShuffleOffset: 1 },"abc")).toBe("bac");
    expect(encryptModule.encrypt({ ShuffleOffset: 2 },"abc")).toBe("cba");
    expect(encryptModule.encrypt({ ShuffleOffset: 3 },"abc")).toBe("abc");
    expect(encryptModule.encrypt({ ShuffleOffset: 4 },"abc")).toBe("abc");

    expect(encryptModule.encrypt({ ShuffleOffset: 0 },"aAaA")).toBe("aAaA");
    expect(encryptModule.encrypt({ ShuffleOffset: 0 },"abcd")).toBe("abcd");
    expect(encryptModule.encrypt({ ShuffleOffset: 1 },"abcd")).toBe("badc");
    expect(encryptModule.encrypt({ ShuffleOffset: 2 },"abcd")).toBe("cdab");
    expect(encryptModule.encrypt({ ShuffleOffset: 3 },"abcd")).toBe("dbca");
    expect(encryptModule.encrypt({ ShuffleOffset: 4 },"abcd")).toBe("abcd");
    expect(encryptModule.encrypt({ ShuffleOffset: 4 },"abcd")).toBe("abcd");
});