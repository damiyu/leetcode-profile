/*
 * 543: Diameter of Binary Tree
 * Last Updated: Feb 27, 2024
 */
var global_max = 0;

var diameterOfBinaryTree = function(root) {
    global_max = 0;

    let root_max = traverse(root, 0);
    return Math.max(root_max, global_max);
};

function traverse(node, cnt) {
    if (node.left === null && node.right === null) return cnt;
    if (node.left === null) return traverse(node.right, cnt + 1);
    if (node.right === null) return traverse(node.left, cnt + 1);

    let a = traverse(node.left, cnt + 1), b = traverse(node.right, cnt + 1);
    global_max = a + b - (2 * cnt) > global_max ? a + b - (2 * cnt) : global_max;
    return Math.max(a, b);
}