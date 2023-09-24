package med.med92;

/*
 * 92: Reverse Linked List II
 * Last Updated: Sep 7, 2023
 * Solve Time: 11 min & 45 sec
 */
public class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode curNode = head, backNode = head;
        int[] nums = new int[right - left + 1];
        int len = right - left + 1, idx = 1;

        while (idx++ < left) {
            curNode = curNode.next;
            backNode = curNode;
        }

        for (int i = 0; i < len; i++) {
            nums[i] = curNode.val;
            curNode = curNode.next;
        }

        for (int i = 0; i < len; i++) {
            backNode.val = nums[len - i - 1];
            backNode = backNode.next;
        }

        return head;
    }
}