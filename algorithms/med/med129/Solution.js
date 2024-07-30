/*
 * 129: Sum Root to Leaf Numbers
 * Last Updated: Apr 14, 2024
 * Solve Time: 5 min & 14 sec
 */
var sumNumbers = function(root) {
    const leaves = function(node, sum) {
        sum = sum * 10 + node.val;

        if (!node.left && !node.right) return sum;
        else if (!node.left) return leaves(node.right, sum);
        else if (!node.right) return leaves(node.left, sum);
        else return leaves(node.left, sum) + leaves(node.right, sum);
    }

    return leaves(root, 0);
};