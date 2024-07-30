#include <iostream>
#include <string>
using namespace std;

/*
 * 2000: Reverse Prefix of Word
 * Last Updated: Apr 30, 2024
 * Solve Time: 4 min & 43 sec
 */
class Solution {
public:
    string reversePrefix(string word, char ch) {
        int n = word.size();

        for (int i = 0; i < n; i++) {
            if (word[i] == ch) {
                for (int j = 0; j < i / 2; j++) swap(word[j], word[i - j]);
                return word;
            }
        }

        return word;
    }
};