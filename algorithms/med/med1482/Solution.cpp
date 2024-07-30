#include <iostream>
#include <vector>
using namespace std;

/*
 * 1482: Minimum Number of Days to Make m Bouquets
 * Last Updated: Jun 18, 2024
 */
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        const int n = bloomDay.size();
        int maxDay = 0;

        if ((long long) m * k > n) return -1;
        for (int i = 0; i < n; i++) maxDay = maxDay < bloomDay[i] ? bloomDay[i] : maxDay;

        int left = 0, right = maxDay, mid = 0;
        bool made = false;
        while (left <= right) {
            made = false;
            int flowers = 0, cnt = 0;
            mid = left + (right - left) / 2;

            for (int i = 0; i < n; i++) {
                if (bloomDay[i] <= mid) flowers++;
                else flowers = 0;

                if (flowers == k) {
                    flowers = 0;
                    cnt++;
                }

                if (cnt == m) {
                    made = true;
                    break;
                }
            }

            if (made) right = mid - 1;
            else left = mid + 1;
        }

        return made ? mid : mid + 1;
    }
};