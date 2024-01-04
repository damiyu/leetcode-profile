/*
 * 1624: Largest Substring Between Two Equal Characters
 * Last Updated: Dec 31, 2023
 * Solve Time: 14 min & 47 sec
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let n = s.length, charIdxs = [], max = -1;

    for (let i = 0; i < n; i++) {
        if (charIdxs[s[i]] !== undefined) {
            max = max < i - charIdxs[s[i]] - 1 ? i - charIdxs[s[i]] - 1 : max;
        } else {
            charIdxs[s[i]] = i;
        }
    }
    return max;
}

// My Original Solution
/*
var maxLengthBetweenEqualCharacters = function(s) {
    let n = s.length, charIdxs = new Array(26), max = -1;

    for (let i = 0; i < 26; i++) charIdxs[i] = new Array(2).fill(-1);
    for (let i = 0; i < n; i++) {
        let charIdx = s[i].charCodeAt() - 97;
        if (charIdxs[charIdx][0] == -1) charIdxs[charIdx][0] = i;
        else charIdxs[charIdx][1] = i;
    }
    for (const idxs of charIdxs) {
        if (idxs[0] == -1 || idxs[1] == -1) continue;
        max = max < idxs[1] - idxs[0] - 1 ? idxs[1] - idxs[0] - 1 : max;
    }
    return max;
}
*/