#include <iostream>
#include <vector>
#include <string>
using namespace std;

/*
 * 165: Compare Version Numbers
 * Last Updated: Jul 2, 2024
 * Solve Time: 19 min & 12 sec
 */
class Solution {
public:
    int compareVersion(string version1, string version2) {
        vector<int> revisions1, revisions2;
        const int n = version1.size(), m = version2.size();
        int idx = 0;

        for (int i = 0; i < n + 1; i++) {
            if (i == n || version1[i] == '.') {
                revisions1.push_back(stoi(version1.substr(idx, i - idx + 1)));
                idx = i + 1;
            }
        }

        idx = 0;
        for (int i = 0; i < m + 1; i++) {
            if (i == m || version2[i] == '.') {
                revisions2.push_back(stoi(version2.substr(idx, i - idx + 1)));
                idx = i + 1;
            }
        }

        const int a = revisions1.size(), b = revisions2.size();
        if (a < b) for (int i = 0; i < b - a; i++) revisions1.push_back(0);
        else if (b < a) for (int i = 0; i < a - b; i++) revisions2.push_back(0);

        const int c = revisions1.size();
        for (int i = 0; i < c; i++) {
            if (revisions1[i] < revisions2[i]) return -1;
            else if (revisions2[i] < revisions1[i]) return 1;
        }

        return 0;
    }
};