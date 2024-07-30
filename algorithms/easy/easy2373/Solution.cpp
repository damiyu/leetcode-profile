#include <iostream>
#include <vector>
using namespace std;

/*
 * 2373: Largest Local Values in a Matrix
 * Last Updated: May 11, 2024
 * Solve Time: 11 min & 15 sec
 */
class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        const int n = grid.size();
        vector<vector<int>> maxLocal(n - 2, vector<int>(n - 2));

        for (int i = 1; i < n - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                int val1 = max({grid[i - 1][j - 1], grid[i - 1][j], grid[i - 1][j + 1]});
                int val2 = max({grid[i][j - 1], grid[i][j], grid[i][j + 1]});
                int val3 = max({grid[i + 1][j - 1], grid[i + 1][j], grid[i + 1][j + 1]});

                maxLocal[i - 1][j - 1] = max({val1, val2, val3});
            }
        }

        return maxLocal;
    }
};