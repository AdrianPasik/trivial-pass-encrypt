class ShuffleCharEncrypt {
    static encrypt(config, text) {
        const shuffleOffset = config.ShuffleOffset;
        let output = new Array(text.length);
        let nextIndex = 0;
        while(nextIndex < text.length) {
            if(output[nextIndex] != undefined) {
                nextIndex++;
                continue;
            }
            if(nextIndex + shuffleOffset < text.length) {
                output[nextIndex] = text[nextIndex + shuffleOffset];
                output[nextIndex + shuffleOffset] = text[nextIndex];
            } else {
                for(let i = nextIndex; i < text.length; i++) {
                    if(output[i] == undefined) {
                        output[i] = text[i];
                    }
                    
                }
                break;
            }
            nextIndex++;
        }
        return output.join("");
    }

    static decrypt(config, text) {

    }
}

module.exports = ShuffleCharEncrypt;