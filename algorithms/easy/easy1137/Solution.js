/*
 * 1137: N-th Tribonacci Number
 * Last Updated: Apr 23, 2024
 * Solve Time: 6 min & 2 sec
 */
var tribonacci = function(n) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;

    let a = 0, b = 1, c = 1;

    for (let i = 3; i < n; i++) [a, b, c] = [b, c, a + b + c];

    return a + b + c;
};