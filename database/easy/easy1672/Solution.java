package easy.easy1672;

/*
 * 1672: Richest Customer Wealth
 * Last Updated: Aug 6, 2023
 */
public class Solution {
    public int maximumWealth(int[][] accounts) {
        short max = 0, cur = 0;

        for (int[] account : accounts) {
            for (int mon : account) cur += mon;
            max = max < cur ? cur : max;
            cur = 0;
        }

        return max;
    }
}