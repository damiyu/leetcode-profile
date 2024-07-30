#include <iostream>
#include <vector>
#include <queue>
using namespace std;

/*
 * 1438: Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * Last Updated: Jun 22, 2024
 */
class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
        const int n = nums.size();
        deque<int> high, low;
        int i = 0, j;

        for (j = 0; j < n; j++) {
            const int curVal = nums[j];
            while (!high.empty() && curVal > high.back()) high.pop_back();
            while (!low.empty() && curVal < low.back()) low.pop_back();

            high.push_back(curVal);
            low.push_back(curVal);
            if (high.front() - low.front() > limit) {
                if (high.front() == nums[i]) high.pop_front();
                if (low.front() == nums[i]) low.pop_front();
                i++;
            }
        }

        return j - i;
    }
};