package med.med11;

/*
 * 11: Container With Most Water
 * Last Updated: Sep 4, 2023
 */
public class Solution {
    public int maxArea(int[] height) {
        int maxVol = 0, curVol = 0, left = 0, right = height.length - 1;

        while (left < right) {
            if (height[left] < height[right]) curVol = height[left] * (right - left++);
            else curVol = height[right] * (right-- - left);
            if (maxVol < curVol) maxVol = curVol;
        }

        return maxVol;
    }
}