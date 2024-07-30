#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 3075: Maximize Happiness of Selected Children
 * Last Updated: Jul 9, 2024
 * Solve Time: 12 min & 15 sec
 */
class Solution {
public:
    long long maximumHappinessSum(vector<int>& happiness, int k) {
        const int n = happiness.size();
        long long sum = 0;

        sort(happiness.begin(), happiness.end());
        for (int i = n - 1; i > n - k - 1; i--) sum += max(0, happiness[i] + (i - n + 1));

        return sum;
    }
};