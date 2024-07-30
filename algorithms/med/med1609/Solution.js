/*
 * 1609: Even Odd Tree
 * Last Updated: Apr 27, 2024
 * Solve Time: 16 min & 48 sec
 */
var isEvenOddTree = function(root) {
    let level = new Array, odd = true;
    if (root.val % 2 == 0) return false;

    level.push(root);
    while (level.length) {
        const alter = new Array;

        while (level.length) {
            const node = level.pop();

            if (node.left) alter.push(node.left);
            if (node.right) alter.push(node.right);
        }

        const a = alter.length;
        if (odd) {
            for (let i = 0; i < a; i++) if (alter[i].val & 1) return false;
            for (let i = 1; i < a; i++) if (alter[i - 1].val <= alter[i].val) return false;
        } else {
            for (let i = 0; i < a; i++) if (!(alter[i].val & 1)) return false;
            for (let i = 1; i < a; i++) if (alter[i - 1].val >= alter[i].val) return false;
        }

        odd ^= true;
        level = alter.reverse();
    }

    return true;
};