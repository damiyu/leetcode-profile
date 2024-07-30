#include <iostream>
#include <vector>
using namespace std;

/*
 * 861: Score After Flipping Matrix
 * Last Updated: Jul 10, 2024
 * Solve Time: 18 min & 38 sec
 */
class Solution {
public:
    int matrixScore(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        int sum = 0, *cnt = (int*) calloc(n, sizeof(int));

        for (int i = 0; i < m; i++) {
            if (grid[i][0] == 0) for (int j = 0; j < n; j++) cnt[j] += grid[i][j] ^ 1;
            else for (int j = 0; j < n; j++) cnt[j] += grid[i][j];
        }

        for (int i = 0; i < n; i++) sum += max(cnt[i], m - cnt[i]) * (1 << n - i - 1);
        free(cnt);

        return sum;
    }
};