#include <iostream>
#include <vector>
using namespace std;

/*
 * 1823: Find the Winner of the Circular Game
 * Last Updated: Jul 7, 2024
 * Solve Time: 32 min & 51 sec
 */
class Solution {
public:
    int findTheWinner(int n, int k) {
        vector<int> friends(n, 1);
        int idx = 0;

        for (int i = 0; i < n - 1; i++) {
            for (int cnt = 0; cnt < k; idx = idx == n - 1 ? 0 : idx + 1) {
                if (friends[idx]) cnt++;
                if (cnt == k) break;
            }

            friends[idx] = 0;
        }

        for (int i = 0; i < n; i++) if (friends[i]) return i + 1;
        return 0;
    }
};