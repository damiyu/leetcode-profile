/*
 * 201: Bitwise AND of Numbers Range
 * Last Updated: Mar 6, 2024
 * Solve Time: 16 min & 23 sec
 */
var rangeBitwiseAnd = function(left, right) {
    let val = 0;

    while (left != right) {
        left >>= 1;
        right >>= 1;
        val++;
    }

    return left << val;
};

// My Original Solution
/*var rangeBitwiseAnd = function(left, right) {
    let val = left;

    if (right == 2147483647 && right - left == left - 1) return left;
    for (let i = left + 1; i <= right; i++) {
        if (val == 0) return 0;
        val &= i;
    }

    return val;
};*/