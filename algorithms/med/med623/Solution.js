/*
 * 623: Add One Row to Tree
 * Last Updated: Apr 16, 2024
 * Solve Time: 13 min & 53 sec
 */
var addOneRow = function(root, val, depth) {
    if (depth == 1) return new TreeNode(val, root, undefined);

    let level = new Array;
    const getLevel = function(node, height) {
        if (height == 0) level.push(node);
        else if (!node.left && !node.right) 1;
        else if (!node.left) getLevel(node.right, height - 1);
        else if (!node.right) getLevel(node.left, height - 1);
        else getLevel(node.left, height - 1) + getLevel(node.right, height - 1);
    }

    getLevel(root, depth - 2);
    let n = level.length;
    for (let i = 0; i < n; i++) {
        level[i].left = new TreeNode(val, level[i].left, undefined);
        level[i].right = new TreeNode(val, undefined, level[i].right);
    }
    return root;
};