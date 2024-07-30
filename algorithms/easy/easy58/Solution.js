/*
 * 58: Length of Last Word
 * Last Updated: Apr 1, 2024
 * Solve Time: 2 min & 55 sec
 */
var lengthOfLastWord = function(s) {
    let n = s.length, cnt = 0;

    for (let i = n - 1; i > -1; i--) {
        if (cnt != 0 && s[i] == ' ') return cnt;
        else if (s[i] != ' ') cnt++;
    }

    return cnt;
};