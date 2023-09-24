package med.med19;

/*
 * 19: Remove Nth Node From End of List
 * Last Updated: Sep 21, 2023
 * Solve Time: 8 min & 31 sec
 */
public class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode curNode = head;
        int dist = 0;

        while (curNode != null) {
            curNode = curNode.next;
            dist++;
        }

        dist -= n + 1;
        if (dist == -1) return head.next;

        curNode = head;
        for (int i = 0; i < dist; i++) curNode = curNode.next;
        curNode.next = curNode.next.next;
        return head;
    }
}