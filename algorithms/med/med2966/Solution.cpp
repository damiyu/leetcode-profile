#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

/*
 * 2966: Divide Array Into Arrays With Max Difference
 * Last Updated: Jan 31, 2024
 * Solve Time: 12 min & 32 sec
 */
class Solution {
public:
    vector<vector<int>> divideArray(vector<int>& nums, int k) {
        vector<vector<int>> subArr;
        int n = nums.size();

        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; i += 3) {
            int val1 = nums[i], val2 = nums[i + 1], val3 = nums[i + 2];

            if (val3 - val1 > k) return vector<vector<int>>();
            subArr.push_back(vector<int>({val1, val2, val3}));
        }
        return subArr;
    }
};