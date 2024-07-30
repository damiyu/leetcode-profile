#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 645: Set Mismatch
 * Last Updated: Jan 22, 2024
 */
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n = nums.size();
        int* cnts = (int*) calloc(n, sizeof(int));
        vector<int> missing(2);

        for (int i = 0; i < n; i++) cnts[nums[i] - 1]++;
        for (int i = 0; i < n; i++) {
            if (cnts[i] == 0) missing[1] = i + 1;
            else if (cnts[i] == 2) missing[0] = i + 1;
        }
        free(cnts);
        return missing;
    }
};