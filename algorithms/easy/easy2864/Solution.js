/*
 * 2864: Maximum Odd Binary Number
 * Last Updated: Mar 1, 2024
 * Solve Time: 8 min & 25 sec
 */
var maximumOddBinaryNumber = function(s) {
    let n = s.length, strMax = new Array(n).fill('0'), idx = 0;

    for (let i = 0; i < n; i++) if (s[i] == '1') strMax[idx++] = '1';
    strMax[idx - 1] = '0';
    strMax[n - 1] = '1';
    return strMax.join('');
};