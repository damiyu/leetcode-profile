package easy.easy21;

/*
 * 21: Merge Two Sorted Lists
 * Last Updated: Aug 31, 2023
 * Solve Time: 13 min & 22 sec
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode newNode = new ListNode(), head = newNode;
        int val1, val2;

        while (list1 != null && list2 != null) {
            newNode.next = new ListNode();
            newNode = newNode.next;

            val1 = list1.val;
            val2 = list2.val;
            if (val1 < val2) {
                newNode.val = val1;
                list1 = list1.next;
            } else {
                newNode.val = val2;
                list2 = list2.next;
            }
        }

        newNode.next = list1 != null ? list1 : list2;
        return head.next;
    }
}

// My Original Solution
/*class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        List<Integer> nums = new ArrayList<>();
        ListNode curNode = list1;

        if (list1 == null) return list2;
        if (list2 == null) return list1;

        while (curNode.next != null) {
            nums.add(curNode.val);
            curNode = curNode.next;
        }
        nums.add(curNode.val);
        curNode.next = list2;

        curNode = list2;
        while (curNode.next != null) {
            nums.add(curNode.val);
            curNode = curNode.next;
        }
        nums.add(curNode.val);

        Collections.sort(nums);
        Collections.reverse(nums);
        curNode = list1;
        int i = nums.size();
        while(i-- > 0) {
            curNode.val = nums.get(i);
            curNode = curNode.next;
        }

        return list1;
    }
}*/