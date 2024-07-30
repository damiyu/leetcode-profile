/*
 * 988: Smallest String Starting From Leaf
 * Last Updated: Apr 16, 2024
 * Solve Time: 12 min & 57 sec
 */
var smallestFromLeaf = function(root) {
    let minLex = "~";

    const abc = "abcdefghijklmnopqrstuvwxyz";
    const leaves = function(node, word) {
        word = abc[node.val] + word;
        if (!node.left && !node.right) minLex = word < minLex ? word : minLex;
        else if (!node.left) leaves(node.right, word);
        else if (!node.right) leaves(node.left, word);
        else leaves(node.left, word) + leaves(node.right, word);
    }

    leaves(root, "");
    return minLex;
};

// My Original Solution
/*var smallestFromLeaf = function(root) {
    const words = new Array;

    const leaves = function(node, word) {
        word = String.fromCharCode(node.val + 97) + word;
        if (!node.left && !node.right) words.push(word);
        else if (!node.left) leaves(node.right, word);
        else if (!node.right) leaves(node.left, word);
        else leaves(node.left, word) + leaves(node.right, word);
    }

    leaves(root, "");
    let n = words.length, smallest = words[0];

    for (let i = 1; i < n; i++) if (words[i] < smallest) smallest = words[i];
    return smallest;
};*/