#include <iostream>
#include <vector>
using namespace std;

/*
 * 629: K Inverse Pairs Array
 * Last Updated: Jan 27, 2024
 */
class Solution {
public:
    int kInversePairs(int n, int k) {
        vector<int> cur(k + 1, 0), prev(k + 1, 0);
        int mod = 1000000007;

        cur[0] = 1;
        prev[0] = 1;
        for(int i = 1; i < n + 1; i++) {
            for(int j = 0; j < k + 1; j++) {
                cur[j] = (prev[j] + (j > 0 ? cur[j - 1] : 0)) % mod;
                cur[j] = (cur[j] + mod - (j >= i ? prev[j - i] : 0)) % mod;
            }

            prev = cur;
        }
        return cur[k];
    }
};