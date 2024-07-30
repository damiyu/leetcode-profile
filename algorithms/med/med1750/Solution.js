/*
 * 1750: Minimum Length of String After Deleting Similar Ends
 * Last Updated: Mar 6, 2024
 * Solve Time: 14 min & 3 sec
 */
var minimumLength = function(s) {
    let n = s.length, i = 0, j = n - 1, curChar = '\0';

    while (i < j && s[i] == s[j]) {
        curChar = s[i];
        while (i <= j && s[i] == curChar) i++;
        while (i < j && s[j] == curChar) j--;
    }

    return j - i + 1;
};