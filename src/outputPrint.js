class OutputPrint {
    print(text) {
        return text + "test";
    }

    printTextBelowNumbers(text) {
        const indent = ' ';
        let textToPrint = '';
        for(let i = 0; i < text.length; i++) {
            textToPrint += indent + (i + 1);
        }
        textToPrint += "\n";
        for(let i = 0; i < text.length; i++) {
            const currentLength = i.toString().length;
            const previousLength = () => {
                if(i == 0) {
                    return currentLength;
                }
                return (i - 1).toString().length;
            };
            let indentationLevel = currentLength;
            if(currentLength > previousLength()){
                indentationLevel++;
            }
            textToPrint += indent.repeat( indentationLevel ) + text[i];
        }
        return textToPrint;
    }
}

module.exports = OutputPrint;