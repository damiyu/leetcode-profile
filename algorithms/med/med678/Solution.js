/*
 * 678: Valid Parenthesis String
 * Last Updated: Apr 7, 2024
 * Solve Time: 11 min & 43 sec
 */
var checkValidString = function(s) {
    const n = s.length, open = new Array, dots = new Array;

    for (let i = 0; i < n; i++) {
        if (s[i] == '(') {
            open.push(i);
        } else if (s[i] == ')') {
            if (open.length == 0) {
                if (dots.length == 0) return false;
                dots.pop();
            } else {
                open.pop();
            }
        } else {
            dots.push(i);
        }
    }

    while (open.length) if (!dots.length || dots.pop() < open.pop()) return false;
    return true;
};