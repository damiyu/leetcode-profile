/*
 * 513: Find Bottom Left Tree Value
 * Last Updated: Feb 27, 2024
 * Solve Time: 15 min & 8 sec
 */
var leaves = [];

var findBottomLeftValue = function(root) {
    leaves = [];
    traverse(root, 0);
    
    let n = leaves.length, val = -1, lowest = -1;
    for (let i = 0; i < n; i++) if (leaves[i][1] > lowest) [val, lowest] = leaves[i];
    return val;
};

function traverse(node, cnt) {
    if (!node.left && !node.right) leaves.push([node.val, cnt]);
    else if (!node.left) traverse(node.right, cnt + 1);
    else if (!node.right) traverse(node.left, cnt + 1);
    else traverse(node.left, cnt + 1) + traverse(node.right, cnt + 1);
}