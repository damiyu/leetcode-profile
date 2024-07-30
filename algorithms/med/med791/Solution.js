/*
 * 791: Custom Sort String
 * Last Updated: Apr 22, 2024
 * Solve Time: 16 min & 38 sec
 */
var customSortString = function(order, s) {
    const n = order.length, m = s.length, cnts = new Map;
    let str1 = "", str2 = "";

    for (let i = 0; i < n; i++) cnts[order[i]] = 0;
    for (let i = 0; i < m; i++) {
        if (cnts[s[i]] !== undefined) cnts[s[i]]++;
        else str2 += s[i];
    }

    for (let i = 0; i < n; i++) {
        let c = cnts[order[i]];

        while (c) {
            str1 += order[i];
            c--;
        }
    }

    return str1 + str2;
};

// My Original Solution:
/*var customSortString = function(order, s) {
    const chars = s.split(""), lexi = new Map, n = order.length;

    for (let i = 0; i < n; i++) lexi[order[i]] = i;
    chars.sort((a, b) => {
        if (lexi[a] === undefined) return -1;
        else if (lexi[b] === undefined) return 1;
        else return lexi[a] - lexi[b]});
    return chars.join("");
};*/