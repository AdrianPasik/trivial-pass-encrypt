class SwapCharEncrypt {
    static encrypt(config, text) {
        let encryptedText = '';
        const letters = [...'abcdefghijklmnoprstuwxyz'];
        const upperLetters = [...'ABCDEFGHIJKLMNOPRSTUWXYZ'];
        const numbers = [...'0123456789'];

        const getChar = function(table, singleCharacter, offset) {
            let index = table.indexOf(singleCharacter) + offset;
            while(index >= table.length) {
                index -= table.length;
            }
            while(index < 0) {
                index += table.length;
            }
            return table[index];
        };

        for(let singleChar of text) {
            if(Number.isInteger(parseInt(singleChar))) {
                encryptedText += getChar(numbers, singleChar, config.numberOffset);
                continue;
            }
            if(singleChar.match(/[a-z]/i)){
                if(singleChar == singleChar.toUpperCase()) {
                    encryptedText += getChar(upperLetters, singleChar, config.textOffset);
                } else {
                    encryptedText += getChar(letters, singleChar, config.textOffset);
                }
                continue;
            }
            
        }
        
        return encryptedText;
    }
}

module.exports = SwapCharEncrypt;