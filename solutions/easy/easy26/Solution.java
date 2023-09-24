package easy.easy26;

/*
 * 26: Remove Duplicates from Sorted Array
 * Last Updated: Sep 10, 2023
 * Solve Time: 6 min & 17 sec
 */
public class Solution {
    public int removeDuplicates(int[] nums) {
        int len = nums.length, idx = 0;
        for (int i = 0; i < len; i++) if (nums[i] != nums[idx]) nums[++idx] = nums[i];
        return idx + 1;
    }
}