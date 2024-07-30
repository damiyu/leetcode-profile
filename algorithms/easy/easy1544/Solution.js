/*
 * 1544: Make The String Great
 * Last Updated: Apr 5, 2024
 * Solve Time: 10 min & 54 sec
 */
var makeGood = function(s) {
    let str = s, changed = true;

    while (changed) {
        let n = str.length, strChange = "", i;

        changed = false;
        for (i = 0; i < n - 1; i++) {
            if (Math.abs(str.charCodeAt(i) - str.charCodeAt(i + 1)) == 32) {
                changed = true;
                i++;
            } else {
                strChange += str[i];
            }
        }

        if (i == n - 1) strChange += str[n - 1];
        str = strChange;
    }

    return str;
};