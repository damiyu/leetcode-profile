package med.med287;

/*
 * 287: Find the Duplicate Number
 * Last Updated: Sep 18, 2023
 * Solve Time: 
 */
public class Solution {
    public int findDuplicate(int[] nums) {
        int top = nums[nums[0]], bottom = nums[top];

        while (top != bottom) {
            top = nums[top];
            bottom = nums[nums[bottom]];
        }

        top = nums[0];
        while (top != bottom) {
            top = nums[top];
            bottom = nums[bottom];
        }

        return top;
    }
}

// My Original Solution
/*class Solution {
    public int findDuplicate(int[] nums) {
        Set<Integer> check = new HashSet<Integer>();
        int len = nums.length;

        for (int n : nums) {
            if (!check.contains(n)) check.add(n);
            else return n;
        }

        return -1;
    }
}*/