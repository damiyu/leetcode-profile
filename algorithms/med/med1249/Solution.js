/*
 * 1249: Minimum Remove to Make Valid Parentheses
 * Last Updated: Apr 6, 2024
 * Solve Time: 12 min & 32 sec
 */
var minRemoveToMakeValid = function(s) {
    const n = s.length, stack = new Array, ignore = new Set;

    for (let i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else if (s[i] == ')') {
            if (stack.length) stack.pop();
            else ignore.add(i);
        }
    }
    for (const idx in stack) ignore.add(stack[idx]);

    let str = "";
    for (let i = 0; i < n; i++) if (!ignore.has(i)) str += s[i];
    return str;
};