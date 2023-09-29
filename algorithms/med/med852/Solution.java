package med.med852;

/*
 * 852: Peak Index in a Mountain Array
 * Last Updated: Jul 26, 2023
 */
public class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int i = arr.length / 2, t = 0;

        while (i + 1 < arr.length && i - 1 > 0) {
            if (arr[i + 1] > arr[i]) {
                t = i;
                i = (i + arr.length) >> 1;
            } else if (arr[i - 1] > arr[i]) i = (i + t) >> 1;
            else return i;
        }

        return i;
    }
}