package hard.hard4;

/*
 * 4: Median of Two Sorted Arrays
 * Last Updated: Sep 21, 2023
 */
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length, len2 = nums2.length, idx1 = 0, idx2 = 0;

        int midIdx = (len1 + len2 + 1) >> 1, midVal = 0;
        for (int iter = 0; iter < midIdx; iter++) {
            if (idx1 == len1 || (idx2 < len2 && nums1[idx1] > nums2[idx2])) {
                midVal = nums2[idx2++];
            } else if (idx2 == len2 || (idx1 < len1 && nums1[idx1] <= nums2[idx2])) {
                midVal = nums1[idx1++];
            }
        }
        if ((len1 + len2) % 2 == 1) return midVal;

        double ret2 = 0.0;
        if (idx1 == len1 || (idx2 < len2 && nums1[idx1] > nums2[idx2])) ret2 = nums2[idx2];
        else if (idx2 == len2 || (idx1 < len1 && nums1[idx1] <= nums2[idx2])) {
            ret2 = nums1[idx1];
        }
        return (midVal + ret2) / 2;
    }
}