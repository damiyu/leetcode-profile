package med.med81;

/*
 * 81: Search in Rotated Sorted Array II
 * Last Updated: Aug 10, 2023
 */
public class Solution {
    public boolean search(int[] nums, int target) {
        int len = nums.length, mid = 0, top = 0, bias = 0;

        if (nums[len - 1] <= nums[0]) {
            for (int i = 0; i < len >> 1; i++) {
                if (nums[i + 1] < nums[i]) {
                    bias = i + 1;
                } else if (nums[len - 1 - i] < nums[len - 2 - i]) {
                    bias = len - 1 - i;
                }
            }
        }

        bias = bias == 0 ? 1 : bias;
        if (nums[0] <= target && target <= nums[bias - 1]) {
            top = 0;
            mid = bias >> 1;
        } else {
            top = bias;
            bias = len;
            mid = (top + len) >> 1;
        }

        while (top != mid) {
            if (target < nums[mid]) {
                mid = (mid + top) >> 1;
            } else if (nums[mid] < target) {
                top = mid;
                mid = (mid + bias) >> 1;
            } else {
                return true;
            }
        }

        if (mid != len && nums[mid] == target) return true;
        return false;
    }
}