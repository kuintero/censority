var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }

    for (idx in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords, "****");
    }

    return inStr;
}

function addCensoredword(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredword = addCensoredword;
exports.getCensoredWords = getCensoredWords;
