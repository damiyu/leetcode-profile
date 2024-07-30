/*
 * 143: Reorder List
 * Last Updated: Mar 23, 2024
 * Solve Time: 7 min & 37 sec
 */
var reorderList = function(head) {
    let curNode = head, nodes = new Array;

    while (curNode != null) {
        nodes.push(curNode);
        curNode = curNode.next;
    }

    let n = nodes.length;
    for (let i = 0; i < n >> 1; i++) {
        nodes[n - 1 - i].next = nodes[i + 1];
        nodes[i].next = nodes[n - 1 - i];
    }
    nodes[n >> 1].next = null;

    return head;
};