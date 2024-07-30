#include <iostream>
#include <string>
#include <vector>
#include <stack>
using namespace std;

/*
 * 1190: Reverse Substrings Between Each Pair of Parentheses
 * Last Updated: Jul 10, 2024
 * Solve Time: 28 min & 56 sec
 */
class Solution {
public:
    string reverseParentheses(string s) {
        const int n = s.size();
        vector<char> chars;
        stack<int> pos;
        string word;

        for (int i = 0; i < n; i++) {
            if (s[i] == '(') {
                pos.push(chars.size());
            } else if (s[i] == ')') {
                const int start = pos.top(), end = chars.size();

                for (int j = 0; j < (end - start) >> 1; j++) {
                    char temp = chars[start + j];
                    chars[start + j] = chars[end - j - 1];
                    chars[end - j - 1] = temp;
                }

                pos.pop();
            } else {
                chars.push_back(s[i]);
            }
        }

        for (int i = 0; i < chars.size(); i++) word += chars[i];

        return word;
    }
};