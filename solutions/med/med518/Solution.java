package med.med518;

/*
 * 518: Coin Change II
 * Last Updated: Aug 11, 2023
 */
public class Solution {
    public int change(int amount, int[] coins) {
        int[] dp = new int[amount + 1];
        
        dp[0] = 1;
        for (int c : coins) {
            for (int j = c; j <= amount; j++) dp[j] += dp[j - c];
        }

        return dp[amount];
    }
}