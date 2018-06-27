class SwapCharEncrypt {
    static encrypt(config, text) {
        let encryptedText = '';
        const letters = [...'abcdefghijklmnoprstuwxyz'];
        const upperLetters = [...'ABCDEFGHIJKLMNOPRSUWXYZ'];
        const numbers = [...'0123456789'];

        const getChar = function(table, singleCharacter, offset) {
            let index = table.indexOf(singleCharacter) + offset;
            while(index > numbers.length) {
                index -= numbers.length;
            }
            return table[index];
        };

        for(let singleChar of text) {
            console.log(singleChar);
            if(Number.isInteger(singleChar)) {
                encryptedText += getChar(numbers, singleChar, config.numberOffset);
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