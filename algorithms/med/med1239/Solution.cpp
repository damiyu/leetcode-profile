#include <iostream>
#include <vector>
#include <string>
using namespace std;

/*
 * 1239: Maximum Length of a Concatenated String with Unique Characters
 * Last Updated: Jan 23, 2024
 */
class Solution {
public:
    int maxLength(vector<string>& arr) {
        vector<int> dp(1, 0);
        int res = 0;
        
        for (string s : arr) {
            int a = 0, dup = 0;
            for (char c : s) {
                dup |= a & (1 << (c - 'a'));
                a |= 1 << (c - 'a');
            }
            
            if (dup > 0) continue;
            for (int i = dp.size() - 1; i >= 0; i--) {
                if ((dp[i] & a) > 0) continue;
                dp.push_back(dp[i] | a);
                res = max(res, __builtin_popcount(dp[i] | a));
            }
        }
        
        return res;
    }
};