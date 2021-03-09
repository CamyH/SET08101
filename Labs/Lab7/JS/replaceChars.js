let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//let string = [""];

var string = "";

function input() {
    string = prompt("Please enter a word:");
    replaceCharacters(string);
}

function replaceCharacters(string) {
    var i;
    var j;
    var length = string.length;
    var split = string.split("");
    for (i = 0; i < length; i++) {
        for (j = 0; j < alphabetArray.length; j++) {
            if (split[i] == alphabetArray[j]) {
                split[i] = alphabetArray[j + 1];
            }
        }
    }
    console.log(split);
}