#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 169: Majority Element
 * Last Updated: Feb 12, 2024
 * Solve Time: 7 min & 14 sec
 */
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size(), cnt = 0, majority = 0;

        for (int i = 0; i < n; i++) {
            if (cnt == 0) majority = nums[i];

            if (majority == nums[i]) cnt++;
            else cnt--;
        }
        return majority;
    }
};

// My Original Solution
/*class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size(), cur_cnt = 1;

        sort(nums.begin(), nums.end());
        for (int i = 1; i < n; i++) {
            if (nums[i] == nums[i - 1]) cur_cnt++;
            else cur_cnt = 1;

            if (cur_cnt > n / 2) return nums[i];
        }
        return nums[0];
    }
};*/