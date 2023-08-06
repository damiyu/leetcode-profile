package easy.easy234;

/*
 * 234: Palindrome Linked List
 * Last Updated: Jul 26, 2023
 */
public class Solution {
    public boolean isPalindrome(ListNode head) {
        int linkSize = 1;
        ListNode nextNode = head.next;

        while (nextNode != null) {
            linkSize++;
            nextNode = nextNode.next;
        }

        int lst[] = new int[linkSize];
        lst[0] = head.val;
        nextNode = head.next;
        for (int i = 1; i < linkSize; i++) {
            lst[i] = nextNode.val;
            nextNode = nextNode.next;
        }

        for (int j = 0; j < linkSize / 2; j++) {
            if (lst[j] != lst[linkSize - 1 - j]) {
                return false;
            }
        }

        return true;
    }
}