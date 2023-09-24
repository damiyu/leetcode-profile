package easy.easy35;

/*
 * 35: Search Insert Position
 * Last Updated: Sep 23, 2023
 * Solve Time: 7 min & 28 sec
 */
public class Solution {
    public int searchInsert(int[] nums, int target) {
        int len = nums.length, mid = len >> 1, top = 0;

        while (top < mid) {
            if (nums[mid] < target) {
                top = mid;
                mid = (len + mid) >> 1;
            } else if (nums[mid] > target) {
                mid = (top + mid) >> 1;
            } else {
                return mid;
            }
        }

        return nums[mid] < target ? mid + 1 : mid;
    }
}