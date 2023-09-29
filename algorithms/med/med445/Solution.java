package med.med445;
import java.util.*;

/*
 * 445: Add Two Numbers II
 * Last Updated: Jul 18, 2023
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode curNode = l1;
        Stack<Integer> num1 = new Stack<Integer>();
        Stack<Integer> num2 = new Stack<Integer>();
        Stack<Integer> result = new Stack<Integer>();
        int curNum = 0;
        boolean carry = false;

        while (curNode != null) {
            num1.push(curNode.val);
            curNode = curNode.next;
        }

        curNode = l2;
        while (curNode != null) {
            num2.push(curNode.val);
            curNode = curNode.next;
        }

        curNum = num1.pop() + num2.pop();
        if (curNum > 9) {
            carry = true;
            curNum -= 10;
        }

        result.push(curNum);
        while (!num1.isEmpty() || !num2.isEmpty()) {
            curNum = (!num1.isEmpty() ? num1.pop() : 0) + (!num2.isEmpty() ? num2.pop() : 0);

            if (carry) {
                curNum++;
                carry = false;
            }

            if (curNum > 9) {
            carry = true;
            curNum -= 10;
            }

            result.push(curNum);
        }

        if (carry) {
            result.push(1);
        }

        ListNode firstNode = new ListNode(result.pop());
        curNode = firstNode;
        while (!result.isEmpty()) {
            ListNode newNode = new ListNode(result.pop());
            curNode.next = newNode;
            curNode = curNode.next;
        }

        return firstNode;
    }
}