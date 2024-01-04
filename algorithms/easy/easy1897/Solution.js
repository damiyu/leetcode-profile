/*
 * 1897: Redistribute Characters to Make All Strings Equal
 * Last Updated: Dec 30, 2023
 */
var makeEqual = function(words) {
    let n = words.length, cnts = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        for (const c of words[i]) cnts[c.charCodeAt() - 97]++;
    }

    for (let i = 0; i < 26; i++) {
        if (cnts[i] == 0) continue;
        else if (cnts[i] % n != 0) return false;
    }

    return true;
}