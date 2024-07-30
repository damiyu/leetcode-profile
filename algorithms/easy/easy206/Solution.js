/*
 * 206: Reverse Linked List
 * Last Updated: Mar 21, 2024
 * Solve Time: 8 min & 27 sec
 */
var reverseList = function(head) {
    if (head == null) return head;
    let curNode = head.next, next;

    head.next = null;
    while (curNode != null) {
        next = curNode.next;
        curNode.next = head;
        head = curNode;
        curNode = next;
    }
    
    return head;
};