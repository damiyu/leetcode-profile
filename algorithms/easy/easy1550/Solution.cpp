#include <iostream>
#include <vector>
using namespace std;

/*
 * 1550: Three Consecutive Odds
 * Last Updated: Jun 30, 2024
 * Solve Time: 1 min & 9 sec
 */
class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        const int n = arr.size();
        int cnt = 0;

        for (int i = 0; i < n; i++) {
            cnt = arr[i] % 2 == 1 ? cnt + 1 : 0;
            if (cnt == 3) return true;
        }

        return false;
    }
};