/*
 * 1657: Determine if Two Strings Are Close
 * Last Updated: Jan 14, 2024
 * Solve Time: 15 min & 4 sec
 */
var closeStrings = function(word1, word2) {
    let n = word1.length, l = word2.length;
    if (n != l) return false;

    let charCntOne = new Array(26).fill(0), charCntTwo = new Array(26).fill(0);
    for (let i = 0; i < n; i++) {
        charCntOne[word1.charCodeAt(i) - 97]++;
        charCntTwo[word2.charCodeAt(i) - 97]++;
    }
    for (let i = 0; i < 26; i++) {
        if (charCntOne[i] > 0 && charCntTwo[i] == 0) return false;
        if (charCntTwo[i] > 0 && charCntOne[i] == 0) return false;
    }

    charCntOne.sort((a, b) => b - a);
    charCntTwo.sort((a, b) => b - a);
    for (let i = 0; i < n; i++) if (charCntOne[i] != charCntTwo[i]) return false;
    return true;
}