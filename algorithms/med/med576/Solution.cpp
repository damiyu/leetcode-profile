#include <iostream>
#include <vector>
using namespace std;

/*
 * 576: Out of Boundary Paths
 * Last Updated: Jan 31, 2024
 */
class Solution {
public:
    int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {
        long mod = 1000000007, cnts = 0;
        vector<vector<long>> dp_old(m, vector<long>(n, 0));

        dp_old[startRow][startColumn] = 1;
        for (int k = 0; k < maxMove; k++) {
            vector<vector<long>> dp_new(m, vector<long>(n, 0));

            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    bool u = i - 1 > -1, d = i + 1 < m, l = j - 1 > -1, r = j + 1 < n;
                    int cnt = dp_old[i][j] % mod;

                    if (u) dp_new[i - 1][j] += cnt;
                    else cnts += cnt;
                    if (d) dp_new[i + 1][j] += cnt;
                    else cnts += cnt;
                    if (l) dp_new[i][j - 1] += cnt;
                    else cnts += cnt;
                    if (r) dp_new[i][j + 1] += cnt;
                    else cnts += cnt;
                }
            }
            dp_old.swap(dp_new);
        }
        return cnts % mod;
    }
};