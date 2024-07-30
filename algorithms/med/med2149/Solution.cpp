#include <iostream>
#include <vector>
using namespace std;

/*
 * 2149: Rearrange Array Elements by Sign
 * Last Updated: Feb 14, 2024
 * Solve Time: 10 min and 17 sec
 */
class Solution {
public:
    vector<int> rearrangeArray(vector<int>& nums) {
        int n = nums.size(), j = -2, k = -1;
        vector<int> pairs(n);

        for (int i = 0; i < n; i++) {
            if (nums[i] > 0) pairs[j += 2] = nums[i];
            else pairs[k += 2] = nums[i];
        }
        return pairs;
    }
};