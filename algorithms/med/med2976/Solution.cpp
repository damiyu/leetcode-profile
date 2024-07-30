#include <iostream>
#include <vector>
#include <queue>
#include <unordered_map>
#include <unordered_set>
#include <string>
using namespace std;

/*
 * 2976: Minimum Cost to Convert String I
 * Last Updated: Jul 26, 2024
 */
class Solution {
public:
    long long minimumCost(string source, string target, vector<char>& original, vector<char>& changed, vector<int>& cost) {
        const int m = source.size(), n = original.size();
        unordered_map<char, unordered_map<char, int>> map;
        unordered_map<char, unordered_map<char, int>> mem;
        long long totCost = 0;

        for (int i = 0; i < n; i++) {
            const char c = original[i];

            if (map.find(c) != map.end()) {
                if (map[c].find(changed[i]) != map[c].end()) map[c][changed[i]] = min(cost[i], map[c][changed[i]]);
                else map[c][changed[i]] = cost[i];
            } else {
                map[c][changed[i]] = cost[i];
            }
        }

        for (int i = 0; i < m; i++) {
            const char s = source[i], t = target[i];

            if (s != t) {
                if (mem.find(s) != mem.end() && mem[s].find(t) != mem[s].end()) {
                    totCost += mem[s][t];
                    continue;
                }

                priority_queue<pair<int, char>, vector<pair<int, char>>, greater<>> costs;
                unordered_set<char> visit;
                bool f = true;

                costs.push({0, s});
                while (!costs.empty()) {
                    const int b = costs.top().first;
                    const char c = costs.top().second;
                    costs.pop();

                    visit.insert(c);
                    if (c == t) {
                        mem[s][t] = b;
                        totCost += b;
                        f = false;
                        break;
                    }

                    for (auto it : map[c]) {
                        if (visit.find(it.first) == visit.end()) costs.push({it.second + b, it.first});
                    }
                }

                if (f) return -1;
            }
        }

        return totCost;
    }
};