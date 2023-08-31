package medium.med33;

/*
 * 33: Search in Rotated Sorted Array
 * Last Updated: Aug 7, 2023
 */
public class Solution {
    public int search(int[] nums, int target) {
        int len = nums.length, mid = len >> 1, top = 0, bias = 0;

        if (nums[len - 1] < nums[0]) {
            for (int i = 0; i < len >> 1; i++) {
                if (nums[i + 1] < nums[i]) {
                    bias = len - i;
                } else if (nums[len - 1 - i] < nums[len - 2 - i]) {
                    bias = len - 1 - i;
                }
            }
        }

        mid = (len - bias) >> 1;
        top = 0;
        while (top != mid) {
            if (target < nums[mid]) {
                mid = (mid + top) >> 1;
            } else if (nums[mid] < target) {
                top = mid;
                mid = (mid + len - bias) >> 1;
            } else {
                return mid;
            }
        }

        if (nums[mid] == target) return mid;
        mid = (len + bias) >> 1;
        top = bias;
        while (top != mid) {
            if (target < nums[mid]) {
                mid = (mid + top) >> 1;
            } else if (nums[mid] < target) {
                top = mid;
                mid = (mid + len) >> 1;
            } else {
                return mid;
            }
        }

        if (nums[mid] == target) return mid;
        return -1;
    }
}