#include <iostream>
#include <string>
#include <vector>
using namespace std;

/*
 * 1143: Longest Common Subsequence
 * Last Updated: Jan 31, 2024
 */
class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        int n = text1.size() + 1, m = text2.size() + 1;
        int** dp = (int**) malloc(n * sizeof(int*));

        for (int i = 0; i < n; i++) dp[i] = (int*) calloc(m, sizeof(int));
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (text1[i - 1] == text2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
                else dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
            }
        }

        int maxSize = dp[n - 1][m - 1];
        for (int i = 0; i < n; i++) free(dp[i]);
        free(dp);
        return maxSize;
    }
};