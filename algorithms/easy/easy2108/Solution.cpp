#include <iostream>
#include <vector>
using namespace std;

/*
 * 2108: Find First Palindromic String in the Array
 * Last Updated: Feb 13, 2024
 * Solve Time: 2 min & 50 sec
 */
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        int n = words.size();

        for (int i = 0; i < n; i++) {
            int l = words[i].size();
            bool isPal = true;

            for (int j = 0; j < l / 2; j++) {
                if (words[i][j] != words[i][l - 1 - j]) {
                    isPal = false;
                    break;
                }
            }

            if (isPal) return words[i];
        }
        return "";
    }
};