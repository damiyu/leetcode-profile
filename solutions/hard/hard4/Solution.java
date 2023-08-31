package hard.hard4;

/*
 * 4: Median of Two Sorted Arrays
 * Last Updated: Dec 31, 2022
 */
public class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length;
        int len2 = nums2.length;
        int idx1 = 0;
        int idx2 = 0;
        int midIdx = (len1 + len2 + 1) / 2;
        int iter = 0;
        int midVal = 0;

        while (iter < midIdx) {
            iter += 1;
            if (idx1 == len1 || (idx2 < len2 && nums1[idx1] > nums2[idx2])) {
                midVal = nums2[idx2];
                idx2 += 1;
            } else if (idx2 == len2 || (idx1 < len1 && nums1[idx1] <= nums2[idx2])) {
                midVal = nums1[idx1];
                idx1 += 1;
            }
        }

        if ((len1 + len2) % 2 == 1) {
            return (double) midVal;
        }

        double ret1 = (double) midVal;
        double ret2 = 0.0;
        if (idx1 == len1 || (idx2 < len2 && nums1[idx1] > nums2[idx2])) {
            ret2 = (double) nums2[idx2];
        } else if (idx2 == len2 || (idx1 < len1 && nums1[idx1] <= nums2[idx2])) {
            ret2 = (double) nums1[idx1];
        }

        return (ret1 + ret2) / 2;
    }
}