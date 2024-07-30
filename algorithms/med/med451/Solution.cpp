#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

/*
 * 451: Sort Characters By Frequency
 * Last Updated: Feb 14, 2024
 * Solve Time: 18 min & 34 sec
 */
class Solution {
public:
    string frequencySort(string s) {
        vector<pair<int, char>> freq;
        map<char, int> cnts;
        int n = s.size();

        for (int i = 0; i < n; i++) cnts[s[i]]++;

        for (auto it = cnts.begin(); it != cnts.end(); it++) freq.push_back(pair<int, char>(it->second, it->first));
        sort(freq.begin(), freq.end());

        int l = freq.size();
        for (int i = l - 1, j = 0; i > -1; i--) {
            for (int k = 0; k < freq[i].first; j++, k++) s[j] = freq[i].second;
        }
        return s;
    }
};