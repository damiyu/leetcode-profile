/*
 * 1614: Maximum Nesting Depth of the Parentheses
 * Last Updated: Apr 4, 2024
 * Solve Time: 6 min & 2 sec
 */
var maxDepth = function(s) {
    let n = s.length, maxVal = 0, cnt = 0;

    for (let i = 0; i < n; i++){
        if (s[i] == '(') maxVal = ++cnt > maxVal ? cnt : maxVal;
        else if (s[i] == ')') cnt--;
    }

    return maxVal;
};