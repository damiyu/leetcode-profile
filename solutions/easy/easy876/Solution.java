package easy.easy876;

/*
 * 876: Middle of the Linked List
 * Last Updated: Aug 01, 2023
 */
public class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode curNode = head;
        byte s = 0;

        while (curNode != null) {
            curNode = curNode.next;
            s++;
        }

        for (byte i = 0; i < s / 2; i++) head = head.next;
        return head;
    }
}