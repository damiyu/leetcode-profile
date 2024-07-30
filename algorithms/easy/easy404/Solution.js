/*
 * 404: Sum of Left Leaves
 * Last Updated: Apr 13, 2024
 * Solve Time: 9 min & 14 sec
 */
var sumOfLeftLeaves = function(root) {
    const leaves = function(node, isLeft) {
        if (!node.left && !node.right) return isLeft ? node.val : 0;
        else if (!node.left) return leaves(node.right, false);
        else if (!node.right) return leaves(node.left, true);
        else return leaves(node.left, true) + leaves(node.right, false);
    };

    return leaves(root, false);
};