class ShuffleCharEncrypt {
    static encrypt(config, text) {
        const shuffleOffset = config.ShuffleOffset;
        let output = new Array(text.length);
        let nextIndex = 0;
        while(nextIndex < text.length) {
            if(output[nextIndex] != undefined) {
                continue;
            }
            if(nextIndex + shuffleOffset < text.length) {
                output[nextIndex] = text[nextIndex + shuffleOffset];
                output[nextIndex + shuffleOffset] = text[nextIndex];
            }
            nextIndex++;
        }
        console.log(output);
        return output.join("");
    }

    static decrypt(config, text) {

    }
}

module.exports = ShuffleCharEncrypt;