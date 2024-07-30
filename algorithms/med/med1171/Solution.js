/*
 * 1171: Remove Zero Sum Consecutive Nodes from Linked List
 * Last Updated: Mar 11, 2024
 * Solve Time: 24 min & 49 sec
 */
var removeZeroSumSublists = function(head) {
    let n = 0, curNode = head;

    while (curNode) {
        curNode = curNode.next;
        n++;
    }

    let nodes = new Array(n), keep = new Array(n).fill(true);
    curNode = head;
    for (let i = 0; i < n; i++) {
        nodes[i] = curNode;
        curNode = curNode.next;
    }

    for (let i = 0; i < n; i++) {
        if (!keep[i]) continue;
        let sum = 0;

        for (let j = i; j < n; j++) {
            sum += nodes[j].val;

            if (sum == 0) {
                for (let k = i; k <= j; k++) keep[k] = false;

                i = -1;
                break;
            }
        }
    }

    head = null;
    curNode = null;
    for (let i = 0; i < n; i++) {
        if (keep[i]) {
            if (head == null) {
                head = nodes[i];
                head.next = null;
                curNode = head;
                continue;
            }

            curNode.next = nodes[i];
            curNode = curNode.next;
            curNode.next = null;
        }
    }
    return head;
};