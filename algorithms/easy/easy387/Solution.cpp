#include <iostream>
#include <string>
using namespace std;

/*
 * 387: First Unique Character in a String
 * Last Updated: Feb 5, 2024
 * Solve Time: 11 min and 30 sec
 */
class Solution {
public:
    int firstUniqChar(string s) {
        int n = s.size(), cnts[26];

        for (int i = 0; i < n; i++) cnts[s[i] - 'a']++;
        for (int i = 0; i < n; i++) if (cnts[s[i] - 'a'] == 1) return i;
        return -1;
    }
};