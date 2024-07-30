#include <iostream>
#include <vector>
using namespace std;

/*
 * 268: Missing Number
 * Last Updated: Feb 19, 2024
 * Solve Time: 4 min & 46 sec
 */
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        double n = nums.size() + 1.0, expected = (n - 1.0) / 2.0, sum = 0.0;

        for (int i = 0; i < n - 1; i++) sum += nums[i];
        return floor(((expected - (sum / n)) * n) + 0.1);
    }
};