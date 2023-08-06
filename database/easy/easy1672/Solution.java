package easy.easy1672;

/*
 * 1672: Richest Customer Wealth
 * Last Updated: Dec 25, 2022
 */
public class Solution {
    public int maximumWealth(int[][] accounts) {
        short maxMon = 0;

        for (byte i = 0; i < accounts.length; i += 1) {
            short curMon = 0;
            for (byte j = 0; j < accounts[0].length; j += 1) {
                curMon += accounts[i][j];
            }

            if (curMon > maxMon) {
                maxMon = curMon;
            }
        }

        return (int) maxMon;
    }
}