/*
 * 2370: Longest Ideal Subsequence
 * Last Updated: Apr 26, 2024
 */
var longestIdealString = function(s, k) {
    const n = s.length, cnts = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        let idx = s.charCodeAt(i) - 97, maxVal = 0;

        for (let j = 0; j < k + 1; j++) {
            if (idx + j < 26) maxVal = Math.max(maxVal, cnts[idx + j]);
            if (idx - j > -1) maxVal = Math.max(maxVal, cnts[idx - j]);
        }

        cnts[idx] = maxVal + 1;
    }

    return Math.max(...cnts);
};