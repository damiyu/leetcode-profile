package hard.hard10;

/*
 * 10: Regular Expression Matching
 * Last Updated: Aug 12, 2023
 */
public class Solution {
    public boolean isMatch(String s, String p) {
        char[] sChar = s.toCharArray(), pChar = p.toCharArray();
        boolean[][] dp = new boolean[sChar.length + 1][pChar.length + 1];
        dp[0][0] = true;

        for (byte i = 0; i < pChar.length; i++) {
            if (pChar[i] == '*' && dp[0][i - 1]) dp[0][i + 1] = true;
        }

        for (byte i = 0 ; i < sChar.length; i++) {
            for (byte j = 0; j < pChar.length; j++) {
                if (pChar[j] == '.') {
                    dp[i + 1][j + 1] = dp[i][j];
                }
                if (sChar[i] == pChar[j]) {
                    dp[i + 1][j + 1] = dp[i][j];
                }
                if (pChar[j] == '*') {
                    if (sChar[i] != pChar[j - 1] && pChar[j - 1] != '.') {
                        dp[i + 1][j + 1] = dp[i + 1][j - 1];
                    } else {
                        dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
                    }
                }
            }
        }

        return dp[s.length()][p.length()];
    }
}