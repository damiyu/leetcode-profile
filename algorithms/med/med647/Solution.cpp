#include <iostream>
#include <vector>
#include <string>
using namespace std;

/*
 * 647. Palindromic Substrings
 * Last Updated: Jul 10, 2024
 */
class Solution {
public:
    int countSubstrings(string s) {
        const int n = s.length();
        vector<vector<bool>> palindrome(n, vector<bool>(n, false));
        int cnt = 0;

        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < n - i + 1; j++) {
                if (s[j] == s[j + i - 1] && (i <= 2 || palindrome[j + 1][j + i - 2])) {
                    palindrome[j][j + i - 1] = true;
                    cnt++;
                }
            }
        }

        return cnt;
    }
};