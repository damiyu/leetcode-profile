#include <iostream>
#include <vector>
using namespace std;

/*
 * 1043: Partition Array for Maximum Sum
 * Last Updated: Feb 3, 2024
 */
class Solution {
public:
    int maxSumAfterPartitioning(vector<int>& arr, int k) {
        int n = arr.size();
        int* dp = (int*) calloc(k + 1, sizeof(int));

        for (int i = n - 1; i > -1; i--) {
            int cur = 0, end = n < i + k ? n : i + k;
            
            for (int j = i; j < end; j++) {
                cur = cur > arr[j] ? cur : arr[j];
                dp[i % (k + 1)] = max(dp[i % (k + 1)], dp[(j + 1) % (k + 1)] + cur * (j - i + 1));
            }
        }

        int max = dp[0];
        free(dp);
        return max;
    }
};