/*
 * 2485: Find the Pivot Integer
 * Last Updated: Mar 13, 2024
 * Solve Time: 8 min & 16 sec
 */
var pivotInteger = function(n) {
    let left = 1, right = n * (n + 1) >> 1;

    if (n == 1) return 1;
    for (let i = 2; i < n + 1; i++) {
        left += i;
        right -= i - 1;

        if (left == right) return i;
        else if (left > right) return -1;
    }

    return -1;
};