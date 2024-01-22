#include <iostream>
#include <vector>
using namespace std;

/*
 * 198: House Robber
 * Last Updated: Jan 21, 2024
 * Solve Time: 10 min & 9 sec
 */
class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size(), prevTwo = 0, prevOne = 0, cur = 0;
        if (n == 1) return nums[0];
        if (n == 2) return max({nums[0], nums[1]});

        prevTwo = nums[0];
        prevOne = nums[1];
        cur = nums[2] + prevTwo;
        for (int i = 3; i < n; i++) {
            int old = cur;
            cur = max({prevOne, prevTwo}) + nums[i];
            prevTwo = prevOne;
            prevOne = old;
        }
        return cur > prevOne ? cur : prevOne;
    }
};

// My Original Solution
/*class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return nums[0];
        if (n == 2) return max({nums[0], nums[1]});
        int* dp = (int*) malloc(n * sizeof(int));

        dp[0] = nums[0];
        dp[1] = nums[1];
        dp[2] = dp[0] + nums[2];
        for (int i = 3; i < n; i++) {
            dp[i] = max({dp[i - 2], dp[i - 3]}) + nums[i];
        }

        int maxMoney = max({dp[n - 1], dp[n -2]});
        free(dp);
        return maxMoney;
    }
};*/