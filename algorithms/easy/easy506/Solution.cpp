#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 506: Relative Ranks
 * Last Updated: Apr 28, 2024
 * Solve Time: 19 min & 51 sec
 */
class Solution {
public:
    vector<string> findRelativeRanks(vector<int>& score) {
        const int n = score.size();
        vector<pair<int, int>> sorted;
        vector<string> places(n);

        for (int i = 0; i < n; i++) sorted.push_back({score[i], i});
        sort(sorted.begin(), sorted.end());

        places[sorted[n - 1].second] = "Gold Medal";
        if (n > 1) places[sorted[n - 2].second] = "Silver Medal";
        if (n > 2) places[sorted[n - 3].second] = "Bronze Medal";
        for (int i = 0; i < n - 3; i++) places[sorted[i].second] = to_string(n - i);

        return places;
    }
};