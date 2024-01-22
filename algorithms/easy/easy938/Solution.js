/*
 * 938: Range Sum of BST
 * Last Updated: Jan 8, 2024
 * Solve Time: 18 min & 12 sec
 */
var rangeSumBST = function(root, low, high) {
    return getSum(root, low, high);
}

function getSum(node, low, high) {
    let val = node.val >= low && node.val <= high ? node.val : 0;

    if (node.left == null && node.right == null) return val;
    else if (node.left == null) return val + getSum(node.right, low, high);
    else if (node.right == null) return val + getSum(node.left, low, high);
    return val + getSum(node.left, low, high) + getSum(node.right, low, high);
}