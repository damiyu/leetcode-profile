#include <iostream>
#include <vector>
using namespace std;

/*
 * 1463: Cherry Pickup II
 * Last Updated: Jul 26, 2024
 */
class Solution {
public:
    int cherryPickup(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        vector<vector<vector<int>>> dp(m, vector<vector<int>>(n, vector<int>(n, -1)));
        dp[0][0][n - 1] = grid[0][0] + grid[0][n - 1];

        int tot = 0;
        for (int i = 1; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int k = j + 1; k < n; k++) {
                    for (int x = -1; x <= 1; x++) {
                        for (int y = -1; y <= 1; y++) {
                            const int nj = j + x, nk = k + y;

                            if (nj >= 0 && nj < n && nk >= 0 && nk < n) {
                                const int prev = dp[i - 1][nj][nk];

                                if (prev != -1) {
                                    dp[i][j][k] = max(dp[i][j][k], prev + grid[i][j] + (j != k ? grid[i][k] : 0));
                                }
                            }
                        }
                    }

                    if (tot < dp[i][j][k]) tot = dp[i][j][k];
                }
            }
        }
        
        return tot;
    }
};