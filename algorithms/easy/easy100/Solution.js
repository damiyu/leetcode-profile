/*
 * 100: Same Tree
 * Last Updated: Feb 25, 2024
 * Solve Time: 6 min and 12 sec
 */
var isSameTree = function(p, q) {
    let nodes = [p, q];

    while (nodes.length > 0) {
        p = nodes.pop(), q = nodes.pop();

        if (p === null && q === null) continue;
        if (p === null || q === null || p.val != q.val) return false;
        nodes.push(p.left);
        nodes.push(q.left);
        nodes.push(p.right);
        nodes.push(q.right);
    }

    return true;
};

// My Original Solution
/*var isSameTree = function(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null || p.val != q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};*/