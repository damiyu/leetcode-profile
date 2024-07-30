#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 2191: Sort the Jumbled Numbers
 * Last Updated: Jul 23, 2024
 * Solve Time: 29 min & 26 sec
 */
class Solution {
public:
    vector<int> sortJumbled(vector<int>& mapping, vector<int>& nums) {
        const int n = nums.size();
        vector<pair<pair<int, int>, int>> remapped(n);

        for (int i = 0; i < n; i++) {
            int num = nums[i], val = 0, mod = 1;

            if (num == 0) val = mapping[num];
            while (num > 0) {
                mod *= 10;

                const int div = mod / 10, t = (num % mod) / div;
                val += mapping[t] * div;
                num -= t * div;
            }

            remapped[i] = {{nums[i], val}, i};
        }

        sort(remapped.begin(), remapped.end(), [](pair<pair<int, int>, int> a, pair<pair<int, int>, int> b){
            if (a.first.second == b.first.second) return a.second < b.second;
            return a.first.second < b.first.second;
        });

        for (int i = 0; i < n; i++) nums[i] = remapped[i].first.first;

        return nums;
    }
};