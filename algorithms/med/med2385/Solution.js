/*
 * 2385: Amount of Time for Binary Tree to Be Infected
 * Last Updated: Jan 10, 2024
 */
var amountOfTime = function(root, start) {
    let steps = 0;
    function traverse(node, startVal) {
        if (node == null) return 0;

        let left = traverse(node.left, startVal);
        let right = traverse(node.right, startVal);

        if (node.val == startVal) {
            steps = Math.max(left, right);
            return -1;
        } else if (left >= 0 && right >= 0) {
            return Math.max(left, right) + 1;
        } else {
            steps = Math.max(steps, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    }

    traverse(root, start);
    return steps;
}