/*
 * 1026: Maximum Difference Between Node and Ancestor
 * Last Updated: Jan 11, 2024
 * Solve Time: 31 min & 42 sec
 */
var maxAncestorDiff = function(root) {
    let maxDiff = 0;
    function traverseTree(node, smallVal, bigVal) {
        let curDiff = Math.max(Math.abs(node.val - smallVal), Math.abs(node.val - bigVal));
        maxDiff = maxDiff > curDiff ? maxDiff : curDiff;

        if (node.val < smallVal) smallVal = node.val;
        if (node.val > bigVal) bigVal = node.val;
        if (node.left != null && node.right != null) {
            traverseTree(node.left, smallVal, bigVal);
            traverseTree(node.right, smallVal, bigVal);
        } else if (node.left != null) {
            traverseTree(node.left, smallVal, bigVal);
        } else if (node.right != null) {
            traverseTree(node.right, smallVal, bigVal)
        }
    }
    traverseTree(root, root.val, root.val);
    return maxDiff;
}