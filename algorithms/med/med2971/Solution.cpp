#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 2971: Find Polygon With the Largest Perimeter
 * Last Updated: Jul 13, 2024
 */
class Solution {
public:
    long long largestPerimeter(vector<int>& nums) {
        const int n = nums.size();
        long long val = 0;

        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; i++) val += nums[i];
        for (int i = n - 1; i > -1; i--) {
            if (nums[i] < val - nums[i]) return val;
            val -= nums[i];
        }

        return -1;
    }
};