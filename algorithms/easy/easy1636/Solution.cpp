#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
 * 1636: Sort Array by Increasing Frequency
 * Last Updated: Jul 22, 2024
 * Solve Time: 9 min 6 sec
 */
class Solution {
public:
    vector<int> frequencySort(vector<int>& nums) {
        const int n = nums.size();
        int cnts[201];

        for (const int num : nums) cnts[num + 100]++;

        vector<pair<int, int>> pairs;
        for (int i = 0; i < 201; i++) if (cnts[i]) pairs.push_back({i - 100, cnts[i]});
        sort(pairs.begin(), pairs.end(), [](pair<int, int> a, pair<int, int> b)
        {
            return a.second != b.second ? a.second < b.second : a.first > b.first;
        });

        vector<int> sorted;
        for (const auto p : pairs) {
            if (p.second > 0) {
                const int val = p.first;

                for (int i = 0; i < p.second; i++) sorted.push_back(val);
            }
        }

        return sorted;
    }
};