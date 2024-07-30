#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

/*
 * 2441: Largest Positive Integer That Exists With Its Negative
 * Last Updated: May 2, 2024
 * Solve Time: 6 min & 2 sec
 */
class Solution {
public:
    int findMaxK(vector<int>& nums) {
        unordered_set<int> s;
        int n = nums.size(), k = -1;

        for (int i = 0; i < n; i++) s.insert(nums[i]);

        for (int i = n - 1; i > -1; i--) {
            if (nums[i] > 0 && nums[i] > k && s.find(-nums[i]) != s.end()) k = nums[i];
        }

        return k;
    }
};