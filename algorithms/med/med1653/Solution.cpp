#include <iostream>
#include <vector>
#include <string>
using namespace std;

/*
 * 1653: Minimum Deletions to Make String Balanced
 * Last Updated: Jul 29, 2024
 */
class Solution {
public:
    int minimumDeletions(string s) {
        const int n = s.size();
        int a = 0, b = 0, cnt = 0;

        for (int i = 0; i < n; i++) if (s[i] == 'a') a++;

        cnt = a;
        for (int i = 0; i < n; i++) {
            if (s[i] == 'a') a--;
            else b++;

            if (a + b < cnt) cnt = a + b;
        }

        return cnt;
    }
};