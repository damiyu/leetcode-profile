package med.med725;

/*
 * 725: Split Linked List in Parts
 * Last Updated: Sep 6, 2023
 * Solve Time: 14 min & 38 sec
 */
public class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode[] nodeHeads = new ListNode[k];
        ListNode curNode = head, nextNode = head;
        int len = 0, partLen, extraLen;

        while (curNode != null) {
            curNode = curNode.next;
            len++;
        }

        partLen = len / k;
        extraLen = len % k;
        curNode = head;
        for (int i = 0; i < k && curNode != null; i++) {
            nodeHeads[i] = curNode;

            for (int j = 1; j < partLen; j++) curNode = curNode.next;
            if (partLen > 0 && extraLen-- > 0) curNode = curNode.next;
            
            nextNode = curNode.next;
            curNode.next = null;
            curNode = nextNode;
        }

        return nodeHeads;
    }
}

// My Original Solution
/*class Solution {
    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode[] nodeHeads = new ListNode[k];
        ListNode curNode = head, nextNode = head;
        int len = 0, partLen, extraLen;

        while (curNode != null) {
            curNode = curNode.next;
            len++;
        }

        partLen = len / k;
        extraLen = len % k;
        curNode = head;
        if (len <= k) {
            for (int i = 0; curNode != null; i++) {
                nodeHeads[i] = curNode;
                nextNode = curNode.next;
                curNode.next = null;
                curNode = nextNode;
            }

            return nodeHeads;
        }

        for (int i = 0; i < k; i++) {
            nodeHeads[i] = curNode;

            for (int j = 1; j < partLen; j++) {
                curNode = curNode.next;
            }

            if (extraLen-- > 0) curNode = curNode.next;
            nextNode = curNode.next;
            curNode.next = null;
            curNode = nextNode;
        }

        return nodeHeads;
    }
}*/