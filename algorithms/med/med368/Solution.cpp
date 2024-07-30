#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 368: Largest Divisible Subset
 * Last Updated: Feb 9, 2024
 */
class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        int n = nums.size(), idx = 1, num = 0;
        vector<int> max_pairs;

        int* dp = (int*) malloc(n * sizeof(int));
        for (int i = 0; i < n; i++) dp[i] = 1;
        sort(nums.begin(), nums.end());

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] % nums[j] == 0 && dp[i] < dp[j] + 1){
                    dp[i] = dp[j] + 1;
                    idx = idx < dp[i] ? dp[i] : idx;
                }
            }
        }

        for (int i = n - 1; i > -1; i--) {
            if (idx == dp[i] && (!num || num % nums[i] == 0)) {
                max_pairs.push_back(nums[i]);
                num = nums[i];
                idx--;
            }
        }

        free(dp);
        return max_pairs;
    }
};