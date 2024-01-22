#include <iostream>
#include <vector>
using namespace std;

/*
 * 931: Minimum Falling Path Sum
 * Last Updated: Jan 20, 2024
 */
class Solution {
public:
    int minFallingPathSum(vector<vector<int>>& matrix) {
       int n = matrix.size(), minPath = 101 * 101;

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int left = minPath, top = matrix[i - 1][j], right = minPath;

                if (j - 1 > -1) left = matrix[i - 1][j - 1];
                if (j + 1 < n) right = matrix[i - 1][j + 1];

                if (left <= top && left <= right) matrix[i][j] += left;
                else if (top <= left && top <= right) matrix[i][j] += top;
                else matrix[i][j] += right;
            }
        }

        for (int i = 0; i < n; i++) minPath = minPath < matrix[n - 1][i] ? minPath : matrix[n - 1][i];
        return minPath;
    }
};