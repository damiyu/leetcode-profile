#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

/*
 * 1074: Number of Submatrices That Sum to Target
 * Last Updated: Jan 27, 2024
 */
class Solution {
public:
    int numSubmatrixSumTarget(vector<vector<int>>& matrix, int target) {
        int m = matrix.size(), n = matrix[0].size();

        if (m < 1) return 0;
        for (int i = 0; i < m; i++) {
            for(int j = 1; j < n; j++) matrix[i][j] = matrix[i][j] + matrix[i][j - 1];
        }

        int cnt = 0, sum = 0;
        unordered_map<int, int> counter;
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                counter.clear();
                counter[0] = 1;
                sum = 0;

                for (int k = 0; k < m; k++){
                    sum += matrix[k][j] - (i > 0 ? matrix[k][i - 1] : 0 );
                    cnt += counter.find(sum - target) != counter.end() ? counter[sum - target] : 0;
                    counter[sum]++;
                }
            }
        }
        return cnt;
    }
};