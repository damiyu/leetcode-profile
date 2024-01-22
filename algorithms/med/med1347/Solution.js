/*
 * 1347: Minimum Number of Steps to Make Two Strings Anagram
 * Last Updated: Jan 12, 2024
 * Solve Time: 13 min & 6 sec
 */
var minSteps = function(s, t) {
    let sCharCnt = new Array(26).fill(0), n = s.length, swaps = 0;

    for (let i = 0; i < n; i++) {
        sCharCnt[s.charCodeAt(i) - 97]++;
        sCharCnt[t.charCodeAt(i) - 97]--;
    }

    for (let i = 0; i < 26; i++) swaps += Math.abs(sCharCnt[i]);
    return swaps / 2;
}