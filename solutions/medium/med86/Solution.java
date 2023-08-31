package medium.med86;

/*
 * 86: Partition List
 * Last Updated: Aug 15, 2023
 * Solve Time: 21 min & 56 sec
 */
public class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode curNode = head;
        byte i = 0, j = 0, len = 0, beg;

        while (curNode != null) {
            curNode = curNode.next;
            len++;
        }

        int[] nums = new int[len];
        curNode = head;
        len--;
        while (curNode != null) {
            if (curNode.val < x) nums[i++] = curNode.val;
            else nums[len - j++] = curNode.val;
            curNode = curNode.next;
        }

        beg = i;
        i = 0;
        j = 0;
        curNode = head;
        while (curNode != null) {
            curNode.val = i < beg ? nums[i++] : nums[len - j++];
            curNode = curNode.next;
        }

        return head;
    }
}