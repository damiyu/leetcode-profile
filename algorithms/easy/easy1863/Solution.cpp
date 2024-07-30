#include <iostream>
#include <vector>
using namespace std;

/*
 * 1863: Sum of All Subset XOR Totals
 * Last Updated: May 23, 2024
 */
class Solution {
public:
    int subsetXORSum(vector<int>& nums) {
        return dfs(nums, 0, 0);
    }
    
private:
    int dfs(vector<int>& nums, int idx, int tot) {
        if (idx == nums.size()) return tot;
        return dfs(nums, idx + 1, tot ^ nums[idx]) + dfs(nums, idx + 1, tot);
    }
};