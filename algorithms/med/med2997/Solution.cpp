#include <iostream>
#include <vector>
#include <string>
using namespace std;

/*
 * 2997: Minimum Number of Operations to Make Array XOR Equal to K
 * Last Updated: Apr 29, 2024
 * Solve Time: 33 min & 42 sec
 */
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int n = nums.size(), res = nums[0];

        for (int i = 1; i < n; i++) res ^= nums[i];

        string bit1 = bin_counter(res), bit2 = bin_counter(k);
        int b1 = bit1.size(), b2 = bit2.size(), m = min(b1, b2);

        int diff = 0;
        for (int i = 0; i < m; i++) if (bit1[i] != bit2[i]) diff++;
        if (b1 < b2) {
            bit1 = bit2;
            b1 = b2;
        }

        for (int i = m; i < b1; i++) if (bit1[i] != '0') diff++;
        return diff;
    }

    string bin_counter(int num) {
        string bit = "";

        while (num) {
            bit += num % 2 ? '1' : '0';
            num >>= 1;
        }

        return bit;
    }
};