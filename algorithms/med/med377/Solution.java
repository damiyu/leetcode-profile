package med.med377;

/*
 * 377: Combination Sum IV
 * Last Updated: Sep 9, 2023
 */
public class Solution {
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];

        dp[0]++;
        for (int i = 1; i <= target; i++) {
            for (int n : nums) if (n <= i) dp[i] += dp[i - n];
        }

        return dp[target];
    }
}