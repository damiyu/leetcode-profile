#include <iostream>
#include <vector>
#include <string>
#include <stack>
using namespace std;

/*
 * 150: Evaluate Reverse Polish Notation
 * Last Updated: Jan 31, 2024
 */
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        int n = tokens.size();
        stack<int> inputs;

        for (int i = 0; i < n; i++) {
            string token = tokens[i];
            char c = token[token.size() - 1];

            if (c <= '9' && c >= '0') {
                inputs.push(stoi(token));
                continue;
            }

            int val2 = inputs.top();
            inputs.pop();
            int val1 = inputs.top();
            inputs.pop();

            if (c == '+') inputs.push(val1 + val2);
            else if (c == '-') inputs.push(val1 - val2);
            else if (c == '*') inputs.push(val1 * val2);
            else inputs.push(val1 / val2);
        }
        return inputs.top();
    }
};