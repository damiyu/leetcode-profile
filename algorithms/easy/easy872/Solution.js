/*
 * 872: Leaf-Similar Trees
 * Last Updated: Jan 9, 2024
 * Solve Times: 12 min & 31 sec
 */
var leafSimilar = function(root1, root2) {
    let leafOne = getLeaves(root1), n = leafOne.length;
    let leafTwo = getLeaves(root2), l = leafTwo.length;

    if (n != l) return false;
    for (let i = 0; i < n; i++) if (leafOne[i] != leafTwo[i]) return false;
    return true;
}

function getLeaves(node) {
    if (node.left == null && node.right == null) return [node.val];
    else if (node.left == null) return getLeaves(node.right);
    else if (node.right == null) return getLeaves(node.left);
    return getLeaves(node.left).concat(getLeaves(node.right));
}