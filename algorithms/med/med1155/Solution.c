/*
 * 1155: Number of Dice Rolls With Target Sum
 * Last Updated: Dec 27, 2023
 */
int numRollsToTarget(int n, int k, int target) {
    int dp[n + 1][target + 1]; 
    memset(dp, 0, sizeof(dp));

    dp[0][0] = 1;
    for (int i = 1; i < n + 1; i++){
        for (int j = 1; j < target + 1; j++){
            for (int h = 1; h < k + 1 && j > h - 1; h++){
                dp[i][j] = (dp[i][j] + dp[i - 1][j - h]) % 1000000007;
            }
        }
    }
    return dp[n][target];
}