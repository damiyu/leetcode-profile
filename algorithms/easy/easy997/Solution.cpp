#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

/*
 * 997: Find the Town Judge
 * Last Updated: Feb 22, 2024
 * Solve Time: 17 min & 33 sec
 */
class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        unordered_map<int, int> trust_cnt;
        unordered_set<int> trust_people;
        int m = trust.size();

        if (n == 1) return 1;
        for (int i = 0; i < m; i++) {
            trust_cnt[trust[i][1]]++;
            trust_people.insert(trust[i][0]);
        }

        for (auto it = trust_cnt.begin(); it != trust_cnt.end(); it++) {
            if (it->second == n - 1 && trust_people.find(it->first) == trust_people.end()) return it->first;
        }
        return -1;
    }
};