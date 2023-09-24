package med.med712;

/*
 * 712: Minimum ASCII Delete Sum for Two Strings
 * Last Updated: Sep 4, 2023
 */
public class Solution {
    public int minimumDeleteSum(String s1, String s2) {
        char[] word1 = s1.toCharArray(), word2 = s2.toCharArray();
        int len1 = word1.length, len2 = word2.length;
        int[][] dp = new int[len1 + 1][len2 + 1];

        for (int i = 1; i <= len1; i++) dp[i][0] = dp[i - 1][0] + word1[i - 1];
        for (int i = 1; i <= len2; i++) dp[0][i] = dp[0][i - 1] + word2[i - 1];
        for (int i = 1; i <= len1; i++) {
            for (int j = 1; j <= len2; j++) {
                if (word1[i - 1] == word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else if (dp[i - 1][j] + word1[i - 1] < dp[i][j - 1] + word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j] + word1[i - 1];
                } else {
                    dp[i][j] = dp[i][j - 1] + word2[j - 1];
                }
            }
        }

        return dp[len1][len2];
    }
}