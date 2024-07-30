#include <iostream>
#include <vector>
#include <stack>
using namespace std;

/*
 * 150: Evaluate Reverse Polish Notation
 * Last Updated: Jan 31, 2024
 */
class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {
        int n = temperatures.size();
        vector<int> days(n, 0);
        stack<int> idxs;

        idxs.push(0);
        for (int i = 1; i < n; i++) {
            int curTemp = temperatures[i];

            while (!idxs.empty() && temperatures[idxs.top()] < curTemp) {
                days[idxs.top()] = (i - idxs.top());
                idxs.pop();
            }
            idxs.push(i);
        }
        return days;
    }
};