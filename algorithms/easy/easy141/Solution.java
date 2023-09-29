package easy.easy141;

/*
 * 141: Linked List Cycle
 * Last Updated: Sep 4, 2023
 * Solve Time: 3 min & 1 sec
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        while (head != null) {
            if (head.val == -100001) return true;
            head.val = -100001;
            head = head.next;
        }

        return false;
    }
}