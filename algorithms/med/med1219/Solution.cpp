#include <iostream>
#include <vector>
using namespace std;

/*
 * 1219: Path with Maximum Gold
 * Last Updated: Jul 14, 2024
 */
class Solution {
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        int best = 0;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j]) best = max(traverse(grid, i, j, 0), best);
            }
        }

        return best;
    }

    static int traverse(vector<vector<int>>& grid, int i, int j, int sum) {
        const int save = grid[i][j];
        sum += save;

        int best = sum;

        grid[i][j] = 0;
        if (i - 1 >= 0 && grid[i - 1][j]) best = max(traverse(grid, i - 1, j, sum), best);
        if (i + 1 < grid.size() && grid[i + 1][j]) best = max(traverse(grid, i + 1, j, sum), best);
        if (j - 1 >= 0 && grid[i][j - 1]) best = max(traverse(grid, i, j - 1, sum), best);
        if (j + 1 < grid[0].size() && grid[i][j + 1]) best = max(traverse(grid, i, j + 1, sum), best);
        grid[i][j] = save;

        return best;
    }
};