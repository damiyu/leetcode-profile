package medium.med2;

/*
 * 2: Add Two Numbers
 * Last Updated: Jul 29, 2023
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode top, end, cur;
        boolean c = false;
        int n;

        n = l1.val + l2.val;
        if (n - 10 >= 0) {
            c = true;
            n -= 10;
        }

        top = new ListNode(n);
        cur = top;
        l1 = l1.next;
        l2 = l2.next;
        while (l1 != null && l2 != null) {
            n = c ? l1.val + l2.val + 1 : l1.val + l2.val;
            c = false;
            if (n - 10 >= 0) {
                c = true;
                n -= 10;
            }

            end = new ListNode(n);
            cur.next = end;
            cur = end;
            l1 = l1.next;
            l2 = l2.next;
        }

        while (l1 != null && l2 == null) {
            n = c ? l1.val + 1: l1.val;
            c = false;
            if (n - 10 >= 0) {
                c = true;
                n -= 10;
            }

            end = new ListNode(n);
            cur.next = end;
            cur = end;
            l1 = l1.next;
        }

        while (l1 == null && l2 != null) {
            n = c ? l2.val + 1: l2.val;
            c = false;
            if (n - 10 >= 0) {
                c = true;
                n -= 10;
            }

            end = new ListNode(n);
            cur.next = end;
            cur = end;
            l2 = l2.next;
        }

        if (c) {
            end = new ListNode(1);
            cur.next = end;
        }

        return top;
    }
}