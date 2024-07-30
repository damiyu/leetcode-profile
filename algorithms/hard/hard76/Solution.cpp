#include <iostream>
#include <string>
using namespace std;

/*
 * 76: Minimum Window Substring
 * Last Updated: Jul 26, 2024
 * Solve Time: 38 min & 53 sec
 */
class Solution {
public:
    string minWindow(string s, string t) {
        const int m = s.size(), n = t.size();
        int cnts[52], size = 1e8;
        string str = "";

        for (int i = 0; i < n; i++) {
            if (t[i] >= 97) cnts[t[i] - 97]++;
            else cnts[t[i] - 39]++;
        }

        for (int i = 0; i < 52; i++) if (cnts[i] == 0) cnts[i] = -1e8;

        for (int i = 0, j = 0; j < m; j++) {
            if (s[j] >= 97) cnts[s[j] - 97]--;
            else cnts[s[j] - 39]--;

            if (compare(cnts)) {
                while (compare(cnts)) {
                    if (s[i] >= 97) cnts[s[i] - 97]++;
                    else cnts[s[i] - 39]++;
                    i++;
                }

                if (size > j - i + 2) {
                    size = j - i + 2;
                    str = s.substr(i - 1, size);
                }
            }
        }

        return str;
    }

private:
    static bool compare(int* cnt) {
        for (int i = 0; i < 52; i++) if (cnt[i] > 0) return false;

        return true;
    }
};